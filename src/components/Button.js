import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts, transitions } from '../styles';

const StyledButton = styled.button`
  transition: ${transitions.button};
  color: ${({color}) => color};
  background-color: transparent;
  border-width: ${({border}) => border + 'px'}
  border-color: ${({color}) => color};
  border-radius: ${({round}) => round ? '4px' : '0px'}
  position: relative;
  display: block;
  margin-bottom: 10px;
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto' };
  font-size: ${({size}) => size};
  &:focus {
    outline: none;
  };
  &:hover {
    color: ${({hoverColor}) => hoverColor};
    border-color: ${({hoverColor}) => hoverColor};
    border-bottom-width: ${({border}) => 2 * border + 'px'}
    margin-top: ${({border}) => 0 - border + 'px'}
    cursor: pointer;
  };
  &:active {
    color: ${({activeColor}) => activeColor};
    border-bottom-width: ${({border}) => border + 'px'};
    margin-top: 0px;
  }
`;

const Button = ({
  text,
  color,
  hoverColor,
  activeColor,
  size,
  border,
  disabled,
  round,
}) => (
  <StyledButton
    text={text}
    color={color}
    hoverColor={hoverColor}
    activeColor={activeColor}
    size={size}
    border={border}
    disabled={disabled}
    round={round}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  outline: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  activeColor: PropTypes.string,
  size: PropTypes.string,
  border: PropTypes.border,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
};

Button.defaultProps = {
  outline: false,
  text: 'Click me',
  color: 'darkGrey',
  hoverColor: 'darkGrey',
  activeColor: 'darkerGrey',
  size: 'medium',
  border: 'moderate',
  disabled: false,
  round: false,
};

export default Button;
