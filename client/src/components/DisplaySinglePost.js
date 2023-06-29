import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import "../App.css";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

function DisplaySinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
        const res = await axios.get('/posts/' + path);
        setPost(res.data);
        console.log(res)
    };
    getPost()
  }, [path]);

  return (
    <div className="content">
      <div className="">
        {post.photo && (
        <img
          className=""
          src=""
          alt=""
        />
        )}
        
        <h1 className="title">{post.title}</h1>
          {/* <div className="">
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div> */}
        <div className="">
          <span>
          <FaUserAlt /> By: {' '}
            <Link to={`/?user=${post.username}`} classname='link'>
              {post.username}
            </Link>
          </span>
          <FaCalendarAlt/>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="">{post.desc}</p>
      </div>
    </div>
  )};

  export default DisplaySinglePost;