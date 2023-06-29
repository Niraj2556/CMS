import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
      };
      getCats();
    },[])
    
    return (
    <div className="">
    <div className="">
      <div className="">
        <span className="">Sidebar</span>
        <img
          src=""
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse. Oi
        </p>
      </div>
      <div className="">
        <span className="">Categories</span>
        <ul className="">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} classname='link'>
            <li className="">
              {c.name}
            </li>
            </Link>
          ))}
          
        </ul>
      </div>
      <div className="">
        <span className="">Follow Us</span>
        <div className="">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
    </div>
  );
  }