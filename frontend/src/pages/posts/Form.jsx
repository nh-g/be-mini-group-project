import React from "react";
import userthumb from "../../assets/userthumb.png";

export default function PostForm({ onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body });

    // Clear the input field
    setBody("");
  };

  return (
    <div>
      <div>

        <div>
          <div className="form-group">
            
            <textarea
              className="form-control"
              placeholder = "Create a new post here"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
