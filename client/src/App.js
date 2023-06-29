import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

import "./App.css";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddNewPost";
import NotFound from "./pages/404";

function App () {
    const { user } = useContext(Context);

    return (
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element= {<About />} />
            {/* <Route path="/about" element= {<About />} >{user ? <Home/> : <Register />}</Route> */}
            <Route path="/account" element= {<Account />}/>
            <Route path="/post/:title" element = {<SinglePost />}/>
            <Route path="/account" element = {<Account />}/>
            {/* <Route path="/register" element= {<Register />}/> */}
            {/* <Route path="/settings" element= {<Settings />}/> */}
            <Route path="/add-post" element = {<AddPost />}/>
            <Route path="*" element= {<NotFound />} />
         </Routes>  
  )};

export default App;