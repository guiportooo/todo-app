import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.85em 1em;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  color: ${props => props.theme.white};

  :disabled {
    color: ${props => props.theme.disabledLight};
    background-color: ${props => props.theme.disabled};

    &:hover {
      color: ${props => props.theme.disabledLight};
      background-color: ${props => props.theme.disabled};
    }
  }

  ${props =>
    props.round &&
    css`
      padding: 1em;
      border-radius: 50%;
      text-align: center;
    `}
`;

Button.defaultProps = {
  disabled: false,
  round: false
};

Button.propTypes = {
  disabled: PropTypes.bool,
  round: PropTypes.bool
};

export default Button;
