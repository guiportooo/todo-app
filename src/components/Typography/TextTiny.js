import React from 'react';
import styled from 'styled-components';

const TextTiny = styled.label`
  font-family: 'SF Pro Text';
  font-size: 10px;
  line-height: 24px;
  color: ${props => props.theme.black};
`;

export default TextTiny;
