import React from 'react';

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div>
      <Header/>
      <div className='content'>Nothing Found</div>
      <Footer/>
    </div>
  )
}

export default NotFound;