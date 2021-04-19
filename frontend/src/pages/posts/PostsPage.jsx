// NPM Packages
import React, { useEffect, useState } from "react";

// Project files
import PostsApi from "../../api/PostsApi";
import Form from "./Form";
import Card from "./Card";
import UpdatePost from "./UpdatePost";
import userthumb from "../../assets/userthumb.png";

export default function PostsPage() {
  // Local state
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  // Methods
  async function createPost(postData) {
    try {
      const response = await PostsApi.createPost(postData);
      const post = response.data;
      const newPosts = posts.concat(post);

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePost(post) {
    try {
      await PostsApi.deletePost(post.id);
      const newPosts = posts.filter((p) => p.id !== post.id);

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    PostsApi.getAllPosts()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, [setPosts]);

  function startUpdate() {
    setToggle(true);
  }

  // Components
  const CardsArray = posts.map((post) => (
    <Card key={post.id} post={post} onDeleteClick={() => deletePost(post)} />
  ));

  return (
<div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Welcome to Dumpty Forums</h4>
          <img className="user-thumb" src={userthumb} />
          <br/>
          <div className="card-content">
            <div className="form-group">
      <button className="btn-post" onClick={startUpdate}>Create Post</button>
      {toggle ? (<Form onSubmit={(postData) => createPost(postData)} />

      ) : null}
            </div>
          </div>
        </div>
      </div>
      <h4 className="postList-title"> Hey, don't miss these craps!</h4>
      {CardsArray}
</div>
  );
}
