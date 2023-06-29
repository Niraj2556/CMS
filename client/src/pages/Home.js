import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostsArchive from "../components/PostsArchive";
import Sidebar from "../components/Sidebar";


function Home() {
  const [ posts, setPosts ] = useState([]);
  const { search } = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get('/posts/' + search);
      setPosts(res.data)
    }
    fetchPosts();
    },[search])

  return (
    <div>
      <Header/>
      <PostsArchive posts = {posts} />
      {/* <Sidebar /> */}
      <Footer/>
    </div>
)};

export default Home;