import React from "react";
import { Link } from "react-router-dom";

import CommentList from '../../components/CommentList';
import userthumb from '../../assets/userthumb.png';

export default function PostCard({ post, onDeleteClick }) {
console.log(post);
return (
  <div>
    <Link to={{ pathname: `/posts/${post.id}`}}>
      <div className="card mt-3">
        <div className="card-body">
          <div className="post-container">
            <div className="post-header">
              <p>
                {" "}
                <em>Jhon Doe</em>{" "}
              </p>
              <img className="user-thumb" src={userthumb} />
            </div>
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      </div>
    </Link>
    <button className="btn btn-danger" onClick={onDeleteClick}>
      Delete Post
    </button>
  </div>
);
}
