import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.85em 1em;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};

  &:hover {
    background-color: ${props => props.theme.primaryLight};
  }

  :disabled {
    color: ${props => props.theme.disabledLight};
    background-color: ${props => props.theme.disabled};

    &:hover {
      color: ${props => props.theme.disabledLight};
      background-color: ${props => props.theme.disabled};
    }
  }
`;

const CreateButton = ({ disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick}>
    Create
  </Button>
);

CreateButton.defaultProps = {
  disabled: false,
  onClick: () => console.log('click')
};

CreateButton.propTypes = {
  /** No user action on button is allowed */
  disabled: PropTypes.bool,

  /** Click method */
  onClick: PropTypes.func
};

export default CreateButton;
