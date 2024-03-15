import React from 'react';
import CafeGallery from '/src/components/blocks/cafe-gallery/cafe-gallery';
import Buy from '/src/components/blocks/buy/buy';
import PropTypes from 'prop-types';

function BuyPage({ slides, buyOptions }) {
  return (
    <>
      <CafeGallery slides={ slides } />
      <Buy buyOptions={ buyOptions } />
    </>
  );
}

BuyPage.propTypes = {
  slides: PropTypes.array,
  buyOptions: PropTypes.object
};

export default BuyPage;
