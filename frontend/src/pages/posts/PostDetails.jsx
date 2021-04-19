import React, { useState } from "react";
import CommentList from "../../components/CommentList";
import PostCard from "./Card";
import userthumb from "../../assets/userthumb.png";
import { useLocation } from "react-router-dom";

//This should show the post, show the comments, and provide ability to update
export default function PostDetails({ }) {
  const { state } = useLocation();
  const passedPost = state === undefined ? null : state.post;
  const [post, setPost] = useState(passedPost);


  return (
    <div>
      Hellooo post details
      <p className="product-description">{post.body}</p>
      <CommentList postId = {post.id}/>
    </div>
  );
}
