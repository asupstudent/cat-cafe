import React, { forwardRef } from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types';

const Button = forwardRef(({ children, minWidth, link, className }, ref) => (
  <StyledButton ref={ ref } $minWidth={ minWidth } { ...(link ? { href: link } : { as: 'button', type: 'button' }) } className={ className }>
    { children }
  </StyledButton>
));

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.any,
  minWidth: PropTypes.number,
  link: PropTypes.string,
  className: PropTypes.string
};

export default Button;
