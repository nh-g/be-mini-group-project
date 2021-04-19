import React, { useState, useEffect } from "react";
import CommentList from "../../components/CommentList";
import PostsApi from "../../api/PostsApi";
import { useParams } from "react-router-dom";
import UpdatePost from "./UpdatePost";

//This should show the post, show the comments, and provide ability to update
export default function PostDetails() {
  const { id } = useParams();
  const fetchedPost = PostsApi.getPostById(id);
  const [post, setPost] = useState(null);
  const [toggle, setToggle] = useState(false);

  // useEffect
  useEffect(() => {
    fetchedPost
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => console.error(err));
  }, []);

  async function updatePost(updatedPost) {
    try {
      await PostsApi.updatePost(post.id, updatedPost);
      PostsApi.getPostById(post.id)
        .then((response) => setPost(response))
        .catch(console.error);
    } catch (error) {
      console.log(error);
    }
  }

  function startUpdate() {
    setToggle(true);
  }

  return post ? (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="card-content">
            <h4 className="card-title">{post.user} posted :</h4>
            <p className="product-description"> {post.body}</p>
            <button onClick={startUpdate}>Edit Post</button>
            {toggle ? (
              <UpdatePost
                onSubmit={(postData) => updatePost(postData)}
                post={post}
              />
            ) : null}
            <CommentList postId={id} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
