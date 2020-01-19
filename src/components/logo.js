import React from 'react';
import logoImage from './../img/logo-white.png';

const Logo = () => {
  return (
    <div className="header__logo-box">
      <a href="http://rakeshcheekatimala.github.io/portfolio">
        <img src={logoImage} alt="Logo" className="header__logo" />
      </a>
    </div>
  );
};

export default Logo;
