package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;


@Service
public class CommentService {

    CommentRepository commentRepository;


    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }


    public Comment findComment(Long commentId){

        Comment comment = commentRepository.findById(commentId).orElseThrow(ResourceNotFoundException::new);
        return comment;

    }
}