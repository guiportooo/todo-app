import React from 'react';
import styled from 'styled-components';

const TextCaption = styled.label`
  font-family: 'SF Pro Text';
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.black};
`;

export default TextCaption;
