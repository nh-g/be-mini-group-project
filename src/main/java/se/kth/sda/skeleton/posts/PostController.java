package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PostController {
    PostRepository postRepository;

    @Autowired
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
    /* create a new post */
    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post post) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(postRepository.save(post));
    }

    /* return all posts*/
    @GetMapping("/posts")
    public ResponseEntity <List<Post>>listAllPost() {
            return ResponseEntity.ok(postRepository.findAll());
    }

}
