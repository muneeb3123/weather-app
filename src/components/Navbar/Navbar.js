import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { IoSearch, IoChevronBackCircleSharp } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';
import './Navbar.css';
import { fetchWeatherData } from '../../redux/Home/weatherslice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const clickHandle = (value) => {
    dispatch(fetchWeatherData(value));
  };

  const [value, setvalue] = useState('');
  const isHomePage = location.pathname === '/';

  const handleIconClick = () => {
    navigate('/');
  };

  return (
    <nav>
      {isHomePage ? (
        <AiFillSetting className="settingIcon" />
      ) : (
        <IoChevronBackCircleSharp
          className="settingIcon"
          onClick={handleIconClick}
        />
      )}
      <div className="nav-name">
        <h3 className="navbarName">Weather360</h3>
      </div>
      {isHomePage ? (
        <div className="search-container">
          <input
            type="text"
            placeholder="find cities weather"
            className="search-input"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                clickHandle(value);
              }
            }}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />

          <span className="search-icon">
            <IoSearch onClick={() => clickHandle(value)} />
          </span>
          <FaMicrophone className="microphone" />
        </div>
      ) : (
        <IoChevronBackCircleSharp
          className="settingIcon"
          onClick={handleIconClick}
        />
      )}
    </nav>
  );
}

export default Navbar;
