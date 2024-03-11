import React from 'react';
import { TitleSize } from '/src/components/ui/title/title';
import { StyledSection, StyledTitle } from './styles';
import PropTypes from 'prop-types';

function CafeGallery({ slides }) {
  // eslint-disable-next-line no-console
  console.log(slides);
  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>Галерея нашего кафе</StyledTitle>
    </StyledSection>
  );
}

CafeGallery.propTypes = {
  slides: PropTypes.array,
};

export default CafeGallery;
