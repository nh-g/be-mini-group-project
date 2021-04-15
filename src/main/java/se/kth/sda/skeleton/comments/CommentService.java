package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class CommentService {

    CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment updateComment(Long id, Comment comment) {
        commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        comment.setId(id);
        return  commentRepository.save(comment);
    }

    public void deleteComment(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(comment);
    }

    public Comment createComment(Comment newComment){
        Comment comment = commentRepository.save(newComment);
        return comment;
    }

}