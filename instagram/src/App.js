import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      searchData: ''
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
    post[i].likes += 1

    this.setState({ posts: post })
  }

  handleSearch = current => {
    this.setState({
      searchData: current
    })
  }


  render() {
    console.log(this.state.searchData)
    return (
      <div className="App">
        <header className="header">


          <SearchBar handleSearch={this.handleSearch} searchData={this.state.searchData}/>

        </header>
        {this.state.posts.filter(post => {
          return post.username.includes(this.state.searchData)
        }).map((post, index) => (
          <PostContainer
          key={post.imageUrl}
          posts={post}
          indexProps={index}
          container={this.addNewComment}
          addLike={this.addLike} />

        ))}
      </div>
    );
  }
}

export default App;
