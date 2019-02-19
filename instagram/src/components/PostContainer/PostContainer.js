import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
  return (
    <div key={props.posts.timestamp} className="post-container">
      <img src={props.posts.thumbnailUrl} alt={props.posts.username} />
      <p>{props.posts.username}</p>
      <img src={props.posts.imageUrl} alt="{posts.username}'s' pic" />
      <div className="comment">
        <CommentSection comment={props.posts} />
      </div>
    </div>
  )
}

PostContainer.propTypes ={
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired
    })
  )
}

PostContainer.defaultProps = {
  posts: []
}

export default PostContainer;
