import React from "react";

export default function UpdatePost({ onSubmit, post }) {
  const [body, setBody] = React.useState(post.body);

  const handleSubmit = () => {
    onSubmit({ body: body });
  };

  return (
    <form>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Edit post</h4>

          <div className="card-content">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Edit your post here"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  console.log(body);
                }}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
