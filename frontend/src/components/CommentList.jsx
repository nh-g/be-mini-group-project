import React, { useState, useEffect } from "react";
import CommentsAPI from "../api/CommentsAPI";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  //methods

  async function createComment(commentData) {
    try {
      const response = await CommentsAPI.createComment(commentData, postId);
      const comment = response.data;
      const newComments = comments.concat(comment);

      setComments(newComments);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    CommentsAPI.getAllComments(postId)
      .then(({ data }) => setComments(data))
      .catch((err) => console.error(err));
  }, [setComments]);

  const commentsArray = comments.map((comment, index) => (
    <Comment key={index} comment={comment} />
  ));

  return (
    <div className="comment-container">
       xxx comments
      {commentsArray}
      <CommentForm onSubmit={(commentData) => createComment(commentData)} />
    </div>
  );
}
