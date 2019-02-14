import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const SuccessButton = styled(Button)`
  background-color: ${props => props.theme.success};

  &:hover {
    background-color: ${props => props.theme.successLight};
  }
`;

/** @component */
export default SuccessButton;
