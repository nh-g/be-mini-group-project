package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class PostService {

    PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    public Post updatePost(Long id, Post updatedPost) {
        Post oldPost = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedPost.setId(id);
        updatedPost.setUser(oldPost.getUser());//connects the user
        Post post = postRepository.save(updatedPost);

        return post;
    }

    public void deletePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        postRepository.delete(post);
    }

    public Post createPost(Post newPost){
        Post post = postRepository.save(newPost);
        return post;
    }

    public Post getPostById(Long id){
        Post post = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return post;
    }

    public List<Post> listAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }
}
