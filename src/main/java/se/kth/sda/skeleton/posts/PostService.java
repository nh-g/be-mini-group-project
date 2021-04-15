package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.posts.exeption.ResourceNotFoundException;

@Service
public class PostService {

    PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post updatePost(Long id, Post updatedPost) {
        postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedPost.setId(id);
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
}
