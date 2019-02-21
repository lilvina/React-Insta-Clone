import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  addNewComment = (comment, index) => {
    let post = [...this.state.posts]
    // const pushObj = {
    //
    // }
    post[index].comments.push(  {
        username: "you",
        text: comment
      })
      this.setState({
        posts: post
      })
  }

  addLike = i => {
    let post = [...this.state.posts]
    let like = Object.create(this.state.like)
    post[i].like += 1

    this.setState({ post, like })
  }

  render() {
    return (
      <div className="App">
        <header className="header">

          <SearchBar />

        </header>
        {this.state.posts.map((post, index) => (
          <PostContainer key={post.imageUrl} posts={post} indexProps={index} container={this.addNewComment} like={this.addLike} />

        ))}
      </div>
    );
  }
}

export default App;
