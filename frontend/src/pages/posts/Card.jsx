import React from "react";

import CommentList from '../../components/CommentList';
export default function PostCard({ post, onDeleteClick }) {
    //const postId = post.id
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{post.body}</p>

        <button className="btn btn-danger" onClick={onDeleteClick}>
          Delete Post
        </button>
        <CommentList postId={post.id} />
      </div>
    </div>
  );
}
