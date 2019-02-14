import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../Buttons';
import { FaPlus } from 'react-icons/fa';

const AddButton = ({ disabled, onClick }) => (
  <PrimaryButton round disabled={disabled} onClick={onClick}>
    <FaPlus />
  </PrimaryButton>
);

AddButton.defaultProps = {
  disabled: false,
  onClick: () => {
    console.log('onClick');
  }
};

AddButton.propTypes = {
  /** No user action on button is allowed */
  disabled: PropTypes.bool,

  /** Click method */
  onClick: PropTypes.func
};

export default AddButton;
