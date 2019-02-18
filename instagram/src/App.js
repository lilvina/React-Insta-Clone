import React, { Component } from 'react';
import './App.css';
//import Comment from './components/CommentSection/Comment.js'
import CommentSection from './components/CommentSection/CommentSection.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super()

    this.state = {
      //comment: dummyData
    }
  }
  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
