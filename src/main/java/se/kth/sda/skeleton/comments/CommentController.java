package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostRepository;

import javax.persistence.GeneratedValue;
import javax.validation.Valid;
import java.util.List;

@RestController
public class CommentController {

    CommentRepository commentRepository;
    PostRepository postRepository;

    @Autowired
    public CommentController(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<Comment>> listAllComments(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post.getComments());
    }

    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<Comment> createCommentOnArticle(@PathVariable Long postId, @Valid @RequestBody Comment comment) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        comment.setPost(post);
        return ResponseEntity.ok(commentRepository.save(comment));
    }



}
