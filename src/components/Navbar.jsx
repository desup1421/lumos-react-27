import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar  d-flex'>
      <nav className='navbar container d-flex justify-content-between  pb-5 mt-2'>
        <div className=''>
          <span className='navbar-brand mb-0 h1'>Navbar</span>
        </div>
        <ul className='d-flex gap-5 justify-center align-items-center'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/about' className='nav-link'>
            About
          </Link>
          <Link to='/profile' className='nav-link'>
            Profile
          </Link>
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
          <Link to='/register' className='nav-link'>
            Register
          </Link>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
