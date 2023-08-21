import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <h1>Find your best car</h1>
            <nav>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/review'>Review</Link>
                
            </nav>
        </div>
    );
};

export default Header;