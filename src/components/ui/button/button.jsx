import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button({ children, minWidth }) {
  return (
    <button className="button" style={{minWidth: minWidth}} type="button">
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  minWidth: PropTypes.number
};

export default Button;
