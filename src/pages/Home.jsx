import React from 'react';
import './Home.css';
import logo from '../assets/xum.png'; // Replace with your own image if desired

const Home = () => {
  return (
    <div className="home-bg progressive-bg">
      <div className="home-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} alt="Logo" className="home-logo-large logo-shadow" />
        <h1 className="home-title">Welcome to TeKnowledge</h1>
        <p className="home-desc">Your smart assistant for learning and productivity.<br/>Start chatting with the bubble at the bottom right!</p>
      </div>
    </div>
  );
};

export default Home;