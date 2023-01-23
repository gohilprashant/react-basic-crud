import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            ReactJs
          </Link>
          <div className='navbar-nav'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/posts/add'>
              Add Post
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
