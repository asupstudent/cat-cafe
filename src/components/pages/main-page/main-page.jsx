import React from 'react';
import About from '/src/components/blocks/about/about';
import StarsList from '/src/components/blocks/stars-list/stars-list';

function MainPage(prop) {
  return (
    <>
      <About />
      <StarsList {...prop}/>
    </>
  );
}

export default MainPage;
