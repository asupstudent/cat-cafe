import React from 'react';
import Logo from '/src/components/ui/logo/logo';
import Nav from '/src/components/layout/nav/nav';
import './styles.css';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
