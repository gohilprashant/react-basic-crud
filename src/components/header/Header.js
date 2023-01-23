import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            ReactJs
          </a>
          <div className='navbar-nav'>
            <a className='nav-link active' href='/'>
              Home
            </a>
            <a className='nav-link' href='/post/add'>
              Add Post
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
