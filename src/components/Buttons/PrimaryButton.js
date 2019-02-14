import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primary};

  &:hover {
    background-color: ${props => props.theme.primaryLight};
  }
`;

/** @component */
export default PrimaryButton;
