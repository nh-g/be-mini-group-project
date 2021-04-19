import React, { useState, useEffect, useRef } from "react";
import CommentList from "../../components/CommentList";
import PostCard from "./Card";
import userthumb from "../../assets/userthumb.png";
import PostsApi from "../../api/PostsApi";
import { useLocation, useParams } from "react-router-dom";
import UpdatePost from "./UpdatePost";

//This should show the post, show the comments, and provide ability to update
export default function PostDetails() {
    const { id } = useParams();
 // const { state } = useLocation();
  //const passedPost = state === undefined ?  : state.post;
    const fetchedPost = PostsApi.getPostById(id);
    const [post, setPost] = useState(null);
    const commentsListRef=useRef();


  // useEffect
  useEffect(() => {
    fetchedPost
      .then(({ data }) => {
          setPost(data);
      })
      .catch((err) => console.error(err));
  }, []);

//   const temp = await PostsApi.getPostById(id);
//   setPost(temp);

  async function updatePost(updatedPost) {
    try {
      await PostsApi.updatePost(post.id, updatedPost);
      PostsApi.getPostById(post.id)
          .then(response=>setPost(response))
          .catch(console.error)

      // const response = await PostsApi.updatePost(post.id, updatedPost);
      // setBody(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (post?
   <div>
      <div className="card">
          <div className="card-body">
              <div className="card-content">
                  <h4 className="card-title">Post {post.id}</h4>
                  <p className="product-description"> {post.body}</p>
                  {/* <button onClick = {() => updatePost}>
Edit Post
</button> */}
                  <UpdatePost onSubmit={(postData) => updatePost(postData)} post={post}/>
                  <CommentList postId={id}/>
              </div>
          </div>
      </div>
  </div>:null

  );
}
