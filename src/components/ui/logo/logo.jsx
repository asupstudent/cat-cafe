import React from 'react';
import { ReactComponent as LogoImage } from '/src/assets/logo.svg';
import './style.css';

function Logo() {
  return (
    <a href="/" className='logo__link'>
      <LogoImage />
      <span className='logo__text'>Котокафе</span>
    </a>
  );
}

export default Logo;
