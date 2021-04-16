import React from "react";

export default function CommentForm({ onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleClick = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body });

    // Clear the input field
    setBody("");
  };

  return (
    
      <div className="card-body">
        <h5 className="card-title">Comment this post </h5>

        <div className="card-content">
          <div className="form-group">

            <textarea
              className="form-control"
              placeholder="Enter your comment here"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
         </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={handleClick}>
              Post
            </button>
          </div>
        </div>
      </div>
    
  );
}
