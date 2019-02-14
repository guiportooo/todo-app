import React from 'react';
import PropTypes from 'prop-types';
import { SuccessButton } from '../Buttons';

const CreateButton = ({ disabled, onClick }) => (
  <SuccessButton disabled={disabled} onClick={onClick}>
    Create
  </SuccessButton>
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
