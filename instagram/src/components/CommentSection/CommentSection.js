import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div className="section-comment">
      { props.comment.comments.map((comment) =>
        ( <Comment comment={comment}/>
      ))}
    </div>
  )
}


export default CommentSection;
