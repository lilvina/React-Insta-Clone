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
          <p>instalogo</p>
          <p>instagram</p>
          <SearchBar />
          <p>heart</p>
          <p>person</p>
        </header>
        {this.state.posts.map(post => (
          <PostContainer key={post.imageUrl} posts={post} />

        ))}
      </div>
    );
  }
}

export default App;
