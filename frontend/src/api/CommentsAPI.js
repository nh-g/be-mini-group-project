import Api from "./Api";

class CommentsApi {
  getAllComments(postId) {
    return Api.get("/posts/" + postId + "/comments");
  }

// Currently we don't have this mapping request. 
//   getCommentById(id) {
//     return Api.get("/comments/" + id);
//   } 

  createComment(comment, postId) {
    return Api.post("/posts/" + postId + "/comments", comment);
  }

  updateComment(comment, commentId) {
    return Api.put("/comments/" + commentId, comment);
  }

  deleteComment(commentId) {
    return Api.delete("/comments/" + commentId);
  }
}

export default new CommentsApi();
