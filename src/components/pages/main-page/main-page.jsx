import React from 'react';
import About from '/src/components/blocks/about/about';
import StarsList from '/src/components/blocks/stars-list/stars-list';
import { TitleLevel } from '/src/components/ui/title/title';
import PropTypes from 'prop-types';

function MainPage({ stars }) {
  return (
    <>
      <About label={TitleLevel.H1}/>
      <StarsList stars={stars} level={TitleLevel.H2}/>
    </>
  );
}

MainPage.propTypes = {
  stars: PropTypes.array,
};

export default MainPage;
