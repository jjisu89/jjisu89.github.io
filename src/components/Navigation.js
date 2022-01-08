import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      {/* <Link to="/">오늘의 포춘쿠키</Link> */}
      <Link to="/open">더 열기</Link>
      {/* <Link to="/foryou">For you</Link>
      <Link to="/about">About</Link> */}
    </div>
  );
}

export default Navigation;