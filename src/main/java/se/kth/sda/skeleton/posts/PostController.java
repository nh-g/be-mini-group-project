package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.posts.exeption.*;
import se.kth.sda.skeleton.posts.PostService;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/posts")
@RestController
public class PostController {
    PostRepository postRepository;
    PostService postService;

    @Autowired
    public PostController(PostRepository postRepository, PostService postService) {
        this.postRepository = postRepository;
        this.postService = postService;
    }
    /* create a new post */
    @PostMapping("/")
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post post) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(postService.createPost(post));
    }

    /* return all posts*/
    @GetMapping("/")
    public ResponseEntity <List<Post>>listAllPosts() {
        return ResponseEntity.ok(postService.listAllPosts());
    }

    /* return a specific post based on the provided id */
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        Post post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    /* return should update the post by id */
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post updatePostById){
        Post post = postService.updatePost(id, updatePostById);
        return ResponseEntity.ok(post);
    }

    /* should delete the post by id */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id){
        postService.deletePost(id);
    }
}
