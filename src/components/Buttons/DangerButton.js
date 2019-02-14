import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const DangerButton = styled(Button)`
  background-color: ${props => props.theme.danger};

  &:hover {
    background-color: ${props => props.theme.dangerLight};
  }
`;

export default DangerButton;
