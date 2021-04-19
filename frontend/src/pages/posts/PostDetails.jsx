import React from "react";
import CommentList from "../../components/CommentList";
import PostCard from "./Card";
import userthumb from "../../assets/userthumb.png";
import { useLocation } from "react-router-dom"

//This should show the post, show the comments, and provide ability to update
export default function PostDetails({ onDeleteClick }) {
    const post1 = useLocation();

    console.log(post1);
    return (
        <div>
Hellooo post details
            <div className="card mt-3">
                <div className="card-body">

                    <div className="post-container">
                        <div className="post-header">

                            <p> <em>Jhon Doe</em> </p>
                            <img className="user-thumb" src={userthumb} />

                        </div>
                        <p className="post-body">{post1.body}</p>

                        <button className="btn btn-danger" onClick={onDeleteClick}>
                            Delete Post
                        </button>
                        </div>
                    </div>
            </div>
        </div>

    )

}
