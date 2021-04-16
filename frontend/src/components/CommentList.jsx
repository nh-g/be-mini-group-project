import React, { useState, useEffect } from "react";
import CommentsAPI from "../api/CommentsAPI";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function CommentList({postId}) {
    console.log(postId)
    const [comments, setComments] = useState([])

    useEffect(() => {
        CommentsAPI.getAllComments(postId)
            .then(results=>results.data)
            .then(( data ) => setComments(data))
            .catch((err) => console.error(err));
    }, [comments]);

    const commentsArray = comments.map((comment, index) => (
        <Comment key={index} comment={comment} /> ));



return(

        <div>Comment List here {commentsArray}

         <CommentForm onSubmit={(commentData) => CommentsAPI.createComment(commentData, postId)} />
        </div>
    )
}
