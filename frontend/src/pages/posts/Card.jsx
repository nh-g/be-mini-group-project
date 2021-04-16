import React from "react";

import CommentList from '../../components/CommentList';
import userthumb from '../../assets/userthumb.png';

export default function PostCard({ post, onDeleteClick }) {

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
        </div>
        <CommentList postId={post.id} />
      </div>
    </div>
  );
}
