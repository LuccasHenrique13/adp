import React from 'react';
import backgroundVideo from '../assets/background.mp4';
import Typewriter from 'typewriter-effect';
import abijaudi from '../assets/panoramica.jpeg';
import erro from '../assets/erro.png'
import logo from '../assets/logoAM.png'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Função para determinar o título com base na URL
  const getTitle = () => {
    if (location.pathname === '/abijaudi') {
      return 'Praça Paulo Abi Jaudi';
    } else {
      return 'ADOTE UMA PRAÇA';
    }
  };

  // Renderização condicional com base na URL
  const renderBackground = () => {
    if (location.pathname === '/abijaudi') {
      return (
        <div className="back-video">
          <img src={abijaudi} alt="Praça Abi Jaudi" />
          <div id="typing">
            <h1>{getTitle()}</h1>
          </div>
        </div>
      );
    } else if (location.pathname === '/paginanaoecontrada') {
      return (
        <div className="back-videoError">
          <img src={erro} alt="error" />
          <div id="typing">
          </div>
        </div>
      );
    } else {
      return (
        <div className="back-video">
          <video autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div id="typing">
            <h1>{getTitle()}</h1>
          </div>
        </div>
      );
    } 
  };

  return (
    <div id="home">
      {renderBackground()}
      <div className='scroll'>
        <div className="icon-scroll"></div>
      </div>
    </div>
  );
};

export default Home;
