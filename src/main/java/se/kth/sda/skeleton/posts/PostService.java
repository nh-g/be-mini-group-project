package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post updatePost(Long id, Post updatedPost) {
        postRepository.findById(id);
        updatedPost.setId(id);
        Post post = postRepository.save(updatedPost);
        return post;
    }

}
