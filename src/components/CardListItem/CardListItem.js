import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.white};
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

const CardListItem = ({ children }) => (
  <li>
    <Card>{children}</Card>
  </li>
);

export default CardListItem;
