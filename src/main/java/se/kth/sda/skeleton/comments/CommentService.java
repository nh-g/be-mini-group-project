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

    /**
     * find a comment by his ID
     *
     * @param commentId: the id of the comment to be found
     * @return the comment if exists, throw ResourceNotFoundException if comment is not found
     */
    public Comment findComment(Long commentId) {
        return commentRepository.findById(commentId).orElseThrow(ResourceNotFoundException::new);

    }
}