import React, { useState } from "react";
import CommentList from "../../components/CommentList";
import PostCard from "./Card";
import userthumb from "../../assets/userthumb.png";
import PostsApi from "../../api/PostsApi";
import { useLocation } from "react-router-dom";
import UpdatePost from "./UpdatePost";

//This should show the post, show the comments, and provide ability to update
export default function PostDetails({}) {
  const { state } = useLocation();
  const passedPost = state === undefined ? null : state.post;
  const [post, setPost] = useState(passedPost);

  async function updatePost(updatedPost) {
    try {
      await PostsApi.updatePost(post.id, updatedPost);
      // const response = await PostsApi.updatePost(post.id, updatedPost);
      // setBody(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      Hellooo post details
      <p className="product-description"> {post.body}</p>
      {/* <button onClick = {() => updatePost}>
        Edit Post
      </button> */}
      <UpdatePost onSubmit={(postData) => updatePost(postData)} post={post}/>
      <CommentList postId={post.id} />
    </div>
  );
}
