import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
//import './PostContainer.css';
import { ContainerPosts, CommentDiv, ImgDiv } from './postStyles.js';
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
    <ContainerPosts>
    <div key={props.posts.timestamp} className="post-container">
      <ImgDiv>
        <img className="username-img" src={props.posts.thumbnailUrl} alt={props.posts.username} />
        <p>{props.posts.username}</p>
      </ImgDiv>
      <img className="image-post" src={props.posts.imageUrl} alt="{posts.username}'s' pic" />
      <div className="comment">
        <CommentSection comment={props.posts} />
        <CommentDiv>
        <div><strong>{props.posts.likes} likes</strong></div>
        <form onSubmit={containerPost}>
          <i className="far fa-heart" onClick={() => props.addLike(props.indexProps)} />
          <input type="text" placeholder="comment.." />
          <i className="fas fa-ellipsis-h" />
        </form>
        </CommentDiv>
      </div>
    </div>
    </ContainerPosts>
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
