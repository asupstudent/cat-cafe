import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button({ children }) {
  return (
    <button className="button" type="button">
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
