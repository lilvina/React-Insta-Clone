import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const searchHandle = (e) => {
    props.handleSearch(e.target.value)
  }
  return (
    <div className="search-bar">
      <div className="instagram-logo">
        <img src="https://i.imgur.com/RzOn2Qz.png" alt="logo"/>
      </div>
      <form className="search">
        <input type="text" placeholder="search.." onChange={searchHandle} value={props.searchData} />
      </form>
      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>

  )
}

export default SearchBar;
