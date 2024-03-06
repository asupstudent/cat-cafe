import React from 'react';
import PropTypes from 'prop-types';
import { StyledStarIcon } from './styles';

export const CatFeature = {
  NEW: 'new',
  SOFT: 'soft',
};

function StarIcon({ className = '', feature }) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: 'New',
        bgColor: '#ffb334',
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: 'Ласковый',
        bgColor: '#7fc92e',
      };
      break;
    default:
      options = {
        text: '',
        bgColor: '#000',
      };
      break;
  }

  return options.text ? (
    <StyledStarIcon className={ className } $bgColor={ options.bgColor }>
      { options.text }
    </StyledStarIcon>
  ) : null;
}

StarIcon.propTypes = {
  className: PropTypes.string,
  feature: PropTypes.string
};

export default StarIcon;
