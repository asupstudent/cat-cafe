import React from 'react';
import { TitleSize } from '/src/components/ui/title/title';
import { StyledSection, StyledTitle } from './styles';
import Gallery from '/src/components/ui/gallery/gallery';
import PropTypes from 'prop-types';

function CafeGallery({ slides }) {
  return (
    <>
      <StyledSection>
        <StyledTitle level={2} size={TitleSize.BIG}>Галерея нашего кафе</StyledTitle>
      </StyledSection>
      <Gallery slides={ slides } />
    </>
  );
}

CafeGallery.propTypes = {
  slides: PropTypes.array,
};

export default CafeGallery;
