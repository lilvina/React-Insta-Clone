import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
  return (
    <div key={props.posts.timestamp} className="post-container">
      <img src={props.posts.thumbnailUrl} alt={props.posts.username} />
      <p>{props.posts.username}</p>
      <img src={props.posts.imageUrl} alt="{posts.username} picture" />
      <div>heart</div>
      <div>bubble</div>
      <div className="comment">
        <CommentSection comment={props.posts} />
      </div>
    </div>
  )
}

export default PostContainer;
