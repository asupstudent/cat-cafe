import React from 'react';
import './style.css';

function Logo() {
  return (
    <a href="/" className='logo__link'>
      <img src={`${ process.env.PUBLIC_URL }/images/logo.svg`} alt="Логотип" />
      <span className='logo__text'>Котокафе</span>
    </a>
  );
}

export default Logo;
