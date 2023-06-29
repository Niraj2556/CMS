import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

function CreatePost() {
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [file,setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name',filename);
      data.append('file',file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try{
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch(err) {}
  };
  return (
    <>
    <div className="">
    <div className="">
      {file && (
        <img
          className=""
          src={URL.createObjectURL(file)}
          alt=""
      />
      )}
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </label>
          <input id="fileInput" 
          type="file" 
          style={{ display: "none" }} 
          onChange={e => setFile(e.target.files[0])}
          />
          <input
            className=""
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=> setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <textarea
            className=""
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e=> setDesc(e.target.value)}
          />
        </div>
        <button className="" type="submit">
          Publish
        </button>
      </form>
    </div>
    </div>
    </>
  )};

export default CreatePost;