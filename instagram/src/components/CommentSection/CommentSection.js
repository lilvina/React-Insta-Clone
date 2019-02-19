import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div className="section-comment">
      {props.comments.map(comment => {
        return (
          <div className="section">
            <p>{comment.username} {comment.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CommentSection;
