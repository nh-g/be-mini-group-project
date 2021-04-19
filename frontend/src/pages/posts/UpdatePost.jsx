import React from "react";

export default function UpdatePost({ onSubmit, post }) {
  console.log(post)
  const [body, setBody] = React.useState(post.body);

  const handleSubmit = () => {
  //post.body = body;
    // Invoke the passed in event callback
    onSubmit({body:body} );
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
                onChange={(e) => {setBody(e.target.value);
                console.log(body)}}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
