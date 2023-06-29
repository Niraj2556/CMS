import { Link } from "react-router-dom";

function PostsArchive({posts}) {
  return (
    <div className="content">
      {posts.map((post) => (
        <div className="">
        {post.photo && (
        <img 
          className=""
          src={post.photo} 
          alt="" 
        />
        )}
        <div className="content">
            <div className=""> 
              {post.categories.map((c)=>(
                <span className="">{c.name}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
              <span>{post.title}</span>
            </Link>
            <span className="">{new Date (post.createdAt).toDateString()}</span>
            <span>{post.desc}</span>
        </div>
      </div>
      ))}
    </div>
)}

export default PostsArchive;