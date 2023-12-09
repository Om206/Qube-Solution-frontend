import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/logo.png';
import { HashLink } from 'react-router-hash-link';
const Navigation = () => {
  return (
    <nav class="header">
      <Link to="/">
        <div className="logo">
          <img src={icon} alt="logo" /> QUBE
        </div>
      </Link>

      <div>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/#aboutus">About Us</HashLink>
        <HashLink to="/#product">Product</HashLink>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navigation;
