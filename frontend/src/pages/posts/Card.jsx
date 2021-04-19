import React from "react";
import { Link } from "react-router-dom";
import userthumb from "../../assets/userthumb.png";

export default function PostCard({ post, onDeleteClick }) {
  return (
    <div>



      
        <div className="card mt-3">
          <div className="card-body">
            <div className="post-container">
              <div className="post-header">
                <p>
                  {" "}
                  <em>{post.user}</em>{" "}
                </p>
                <img className="user-thumb" src={userthumb} />
              </div>
              <p className="post-body">{post.body}</p>
              <Link to={{ pathname: `/posts/${post.id}` }}> see comments ...
              </Link>

            </div>
                
          </div>  
             
        </div>
  
      <button className="btn btn-danger" onClick={onDeleteClick}>
        Delete Post
      </button>
    </div>
  );
}
