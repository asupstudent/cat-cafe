import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const TitleSize = {
  BIG: 'big',
  SMALL: 'small',
  DEFAULT: ''
};

function Title({ children, size }) {
  return <h1 className={`title${size ? ` title_${size}` : ''}`}>{ children }</h1>;
}

Title.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string
};

export default Title;
