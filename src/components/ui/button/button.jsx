import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

function Button({ children, minWidth, link, className }) {
  return (
    <StyledButton $minWidth={ minWidth } { ...(link ? { href: link } : { as: 'button', type: 'button' }) } className={ className }>
      { children }
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  minWidth: PropTypes.number,
  link: PropTypes.string,
  className: PropTypes.string
};

export default Button;
