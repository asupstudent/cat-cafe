import React from 'react';
import Button from '/src/components/ui/button/button';

function Nav() {
  return (
    <nav>
      <Button minWidth={ 260 } link="/buy">Купить билет</Button>
    </nav>
  );
}

export default Nav;
