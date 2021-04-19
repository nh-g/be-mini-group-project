import React from "react";
import { Link } from "react-router-dom";

import CommentList from '../../components/CommentList';
import userthumb from '../../assets/userthumb.png';

export default function PostCard({ post, onDeleteClick }) {
console.log(post);
  return (
    <div className="card mt-3">
      <div className="card-body">

      <div className="post-container">
      <div className="post-header"> 

      <p> <em>Jhon Doe</em> </p>
      <img className="user-thumb" src={userthumb} />

      </div>
        <p className="post-body">{post.body}</p>

        <button className="btn btn-danger" onClick={onDeleteClick}>
          Delete Post
        </button>

              <Link to={{pathname:`/posts/${post.id}`, state: {post}}}>View Details</Link>

        </div>


      </div>
    </div>
  );
}
