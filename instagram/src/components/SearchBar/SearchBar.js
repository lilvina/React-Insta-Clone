import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="instagram-logo">
        <img src="https://i.imgur.com/RzOn2Qz.png" alt="logo"/>
      </div>
      <form className="search">
        <input type="text" placeholder="search.."/>
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
