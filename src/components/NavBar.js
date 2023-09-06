import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from '../assets/logo-white.png';
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [ClassMenu, setClassMenu] = useState("menu");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setClassMenu("menu show");
    } else {
      setClassMenu("menu");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const shouldShow = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(shouldShow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  let links = (
    <>
      <li><a href="#home">{t('navbar.home')}</a></li>
      <li><a href="#sobre">{t('navbar.about')}</a></li>
      <li><a href="#projetos">{t('navbar.projects')}</a></li>
    </>
  );

  if (location.pathname === '/abijaudi') {
    links = (
      <>
      <li><a href="#home">{t('navbar.home')}</a></li>
       <li><a href="#sobre">{t('navbar.about')}</a></li>
       <li><a href="#arborea">{t('navbar.arborea')}</a></li>
       <li><a href="#maps">{t('navbar.maps')}</a></li>
      </>
    );
  }

  if (location.pathname === '/paginanaoecontrada') {
    links = (
      <>
      <li><a href="https://adp-reactjs.vercel.app">{t('navbar.back')}</a></li>
      </>
    );
  }

  return (
    <header className={`navbar ${visible ? '' : 'hidden'}`}>
      <a href="https://adp-reactjs.vercel.app">
        <div className="logo">
          <img src={logo} alt="Adote uma Praça" />
        </div>
      </a>
      <div className="menu-icon">
        <input id="checkbox2" type="checkbox" />
        <label className="toggle toggle2" htmlFor="checkbox2" onClick={updateMenu}>
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </div>
      <ul className={ClassMenu}>
        {links}
      </ul>
    </header>
  );
};

export default NavBar;
