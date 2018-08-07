import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts, transitions } from '../styles';

const StyledTitle = styled.h1`
  color: ${({color}) => color};
  position: relative;
  font-size: ${({size}) => size};
`;

const Title = ({
  text,
  color,
  size,
}) => (
  <StyledTitle
    text={text}
    color={color}
    size={size}
  >
    {text}
  </StyledTitle>
);

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Title.defaultProps = {
  text: 'Read me',
  color: 'lightGrey',
  size: 'large',
};

export default Title;
