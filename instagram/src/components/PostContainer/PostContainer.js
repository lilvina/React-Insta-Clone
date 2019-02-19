import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
  //create a function
  //have an event and index takes as params
  const containerPost = (e) => {
    e.preventDefault()
    let comment = e.target.firstChild.value
    props.container(comment, props.indexProps)
  }
  return (
    <div key={props.posts.timestamp} className="post-container">
      <div>
        <img src={props.posts.thumbnailUrl} alt={props.posts.username} />
        <p>{props.posts.username}</p>
        <img src={props.posts.imageUrl} alt="{posts.username}'s' pic" />
        <div className="comment">
        <CommentSection comment={props.posts} />
        <div>{props.posts.likes} likes</div>
        <form onSubmit={containerPost}>
          <input type="text" />
        </form>
      </div>
      </div>
    </div>
  )
}

PostContainer.propTypes = {
  posts: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
}

PostContainer.defaultProps = {
  posts: []
}

export default PostContainer;
