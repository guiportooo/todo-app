import React from 'react';
import styled from 'styled-components';

const TextBody = styled.label`
  font-family: 'SF Pro Text';
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.black};
`;

export default TextBody;
