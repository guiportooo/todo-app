import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const SecondaryButton = styled(Button)`
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.secondary};

  &:hover {
    background-color: ${props => props.theme.secondaryLight};
  }
`;

/** @component */
export default SecondaryButton;
