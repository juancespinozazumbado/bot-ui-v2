import React from 'react';
import './Home.css';
import logo from '../assets/xum.png'; // Replace with your own image if desired

const Home = () => {
  return (
    <div className="home-bg progressive-bg">
      <div className="home-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} alt="Logo" className="home-logo-large logo-shadow" />
        <h1 className="home-title">Xumtech Experiencias que crean cambio</h1>
        <p className="home-desc">Tu asistente inteligente para el aprendizaje y la productividad.<br/>¡Comienza a chatear con el burbuja en la esquina inferior derecha!</p>
      </div>
    </div>
  );
};

export default Home;