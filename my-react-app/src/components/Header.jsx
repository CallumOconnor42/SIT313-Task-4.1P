import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>DEV@Deakin</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <button>Post</button>
      <button>Login</button>
    </header>
  );
};

export default Header;