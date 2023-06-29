import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import React, { useContext } from "react";

function Header() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({type:'LOGOUT'});
  };

    return (
    <div className="box-accent">
      <div className="">
        <h1 className="title">Basic Mern CMS</h1>
        <p className="">A simple useful starter point to create your own content management system using MERN</p>
      </div>
      
      <div className="menu">
          <ul className="menu">
              <li className="">
                <Link className="link" to="/">Home</Link>
              </li>
              <li className=""> 
                <Link className="link" to="/about">About</Link>
              </li>
              <li>
                <Link className="link" to="/add-post">Add Post</Link>
              </li>
              <li className="link" onClick={handleLogout}>
                {user && 'Logout'}</li>
          </ul>

          <div className="">
          {user ? (
              <img
                className=""
                src={user.profilePic}
                alt=""
              /> 
          ) : (
            <ul className="menu">
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/register">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
          <i className=""></i>
          </div>

      </div>

     

    </div>
  );
}

export default Header;