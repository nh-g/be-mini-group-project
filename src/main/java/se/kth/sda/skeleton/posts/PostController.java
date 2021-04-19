package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserRepository;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/posts")
@RestController
public class PostController {
    PostService postService;
    UserRepository userRepository;
    AuthService authService;

    @Autowired
    public PostController(PostService postService, UserRepository userRepository, AuthService authService) {
        this.postService = postService;
        this.userRepository = userRepository;
        this.authService = authService;
    }

    /**
     * Create a new post
     * @param post a new user-created post
     * @return HTTP created status of post
     */
    @PostMapping("")
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post post) {
        
        String email = authService.getLoggedInUserEmail();
        User user = userRepository.findByEmail(email);
        post.setUser(user);
        user.getPosts().add(post);


        return ResponseEntity.status(HttpStatus.CREATED)
                .body(postService.createPost(post));
    }

    /**
     * Return a list of all posts
     * @return HTTP ok status of listing all posts
     */
    @GetMapping("")
    public ResponseEntity <List<Post>>listAllPosts() {
        return ResponseEntity.ok(postService.listAllPosts());
    }

    /**
     * Return a specific post based on ID
     * @param id the id of the specific post
     * @return HTTP ok status of displaying post
     */
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        Post post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    /**
     * Update a post based on ID
     * @param id ID of the post to edit
     * @param Post updatedPost new user-created body to update the post
     * @return HTTP ok status of updated post
     */
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post updatedPost){
        Post post = postService.updatePost(id, updatedPost);
        return ResponseEntity.ok(post);
    }

    /**
     * Delete a post based on ID
     * @param id ID of the post to delete
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id){
        postService.deletePost(id);
    }
}
