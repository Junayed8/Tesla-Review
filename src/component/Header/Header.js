import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2 className='title'>Find Your Best Car</h2>
          <nav>
            <Link to='/blog'>Blog</Link>
            <Link to='/review'>Review</Link>
            <Link to='/about'>About</Link>
          </nav>
        </div>
    );
};

export default Header;