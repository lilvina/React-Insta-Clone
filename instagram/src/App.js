import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="header">
        
          <SearchBar />

        </header>
        {this.state.posts.map(post => (
          <PostContainer key={post.imageUrl} posts={post} />

        ))}
      </div>
    );
  }
}

export default App;
