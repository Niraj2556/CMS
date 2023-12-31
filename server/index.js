const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const multer = require("multer");
const path = require("path");

dotenv.config();
// Recognize json object
app.use(express.json());

// Mongoose used to connect to Mongo url
mongoose.connect(process.env.MONGO_URL).
  then(
    console.log("Connected to MongoDB")
).catch((err) => console.log(err));


// Storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
// To upload

  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  

/* app.use("/",(req,res)=>{
    console.log("hello that's a test")
}); 
*/



app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);


//port 5000 configured
app.listen("5000",() => {
    console.log("Backend is running now")
})