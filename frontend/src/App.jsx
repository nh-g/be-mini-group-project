// NPM Packages
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import ChatPage from "./pages/chat/ChatPage";
import "./styles/App.css";
import PostDetails from "./pages/posts/PostDetails";

export default function App() {
  // State
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  // Constants
  Auth.bindLoggedInStateSetter(setLoggedIn);

  // Components
  const loggedInRouter = (
    <BrowserRouter>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route path="/posts" exact>
            <PostsPage />
          </Route>

          <Route path="/posts/:id">
            <PostDetails />
          </Route>

          <Route path="/chat">
            <ChatPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>



        </Switch>
      </div>
    </BrowserRouter>
  );

  return loggedIn ? loggedInRouter : <AuthPage />;
}
