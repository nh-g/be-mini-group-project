package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
public class CommentController {

    PostRepository postRepository;
    CommentService commentService;

    @Autowired
    public CommentController(PostRepository postRepository, CommentService commentService) {
        this.postRepository = postRepository;
        this.commentService = commentService;
    }

    /**
     * get all comments related to a specific post by his ID
     *
     * @param postId the id of the post
     * @return all comments related to that post, throw ResourceNotFoundException if post is not found
     */
    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<Comment>> listAllComments(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post.getComments());
    }

    /**
     * create a comment to a specific post by his ID
     *
     * @param postId  the id of the post
     * @param comment the comment to create
     * @return status of the action
     */
    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @Valid @RequestBody Comment comment) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        comment.setPost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(commentService.createComment(comment));
    }

    /**
     * update a comment to a specific comment by his ID
     *
     * @param commentId      the id of the comment
     * @param updatedComment the new comment
     * @return status of the action
     */
    @PutMapping("/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long commentId, @RequestBody Comment updatedComment) {
        Comment comment = commentService.updateComment(commentId, updatedComment);
        return ResponseEntity.ok(comment);
    }

    /**
     * delete a comment to a specific comment by his ID
     *
     * @param commentId the id of the comment
     */
    @DeleteMapping("/{commentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
    }

}
