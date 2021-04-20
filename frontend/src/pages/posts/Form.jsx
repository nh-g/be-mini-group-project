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
<<<<<<< HEAD
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Create a new post</h4>
        <img className="user-thumb" src={userthumb} />
        <br/>
        <div className="card-content">
=======
    <div>
      <div>

        <div>
>>>>>>> d9df4aee48341444bdb7e6cc1b4dd1b564714032
          <div className="form-group">
            <textarea
              className="form-control"
<<<<<<< HEAD
              placeholder="Have something to say?"
=======
              placeholder = "Type your new post here"
>>>>>>> d9df4aee48341444bdb7e6cc1b4dd1b564714032
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
