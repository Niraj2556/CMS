/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreatePost from "../components/CreatePost";

function AddNewPost() {
  return (  
    <div>
      <Header/>
      <div className="content">
        <h2>Add New Post</h2>
        <CreatePost />
      </div>
      <Footer/>
  </div>
)};

export default AddNewPost;