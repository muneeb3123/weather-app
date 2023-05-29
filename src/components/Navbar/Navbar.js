import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';
import logo from '../../assets/weatherlogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <AiFillSetting className="settingIcon" />
      <div className="nav-name">
        <h3 className="name">Weather36</h3>
        <span className="nav-logo">
          <img className="logo" src={logo} alt="logo" />
        </span>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" />
        <span className="search-icon">
          <IoSearch />
        </span>
        <FaMicrophone className="microphone" />
      </div>
    </nav>
  );
}

export default Navbar;
