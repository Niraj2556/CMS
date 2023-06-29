import { useContext } from "react";
import { Context } from "../context/Context";
import { useRef } from "react";
import axios from "axios";
import "../App.css";


export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch,isFetching} = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'});
    try {
      const res = await axios.post('/auth/login',{
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch ({type:'LOGIN_SUCCESS', payload:res.data});
    } catch (err) {
      dispatch ({type:'LOGIN_FAILURE'});
    }
  };

  return (
    <div className="">
      <span className="">Login</span>
      <form className="" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="" 
        type="text" 
        placeholder="Enter your username..."
        ref={userRef}
        />
        <label>Password</label>
        <input 
        className="" 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}
        />
        <button className="" type="submit" disabled={isFetching}>Login</button>
      </form>
        <button className="">Register</button>
    </div>
  )
};