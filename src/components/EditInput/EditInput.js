import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../TextInput';
import CreateButton from '../CreateButton';

const OutterDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Input = styled(TextInput)`
  flex: 1;
`;

const disableButton = value => value === undefined || value === '';

const EditInput = ({ htmlId, name, placeholder, value, onChange, onClick }) => (
  <OutterDiv>
    <Input
      type="text"
      htmlId={htmlId}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <CreateButton disabled={disableButton(value)} onClick={onClick} />
  </OutterDiv>
);

EditInput.defaultProps = {
  placeholder: 'Write something'
};

EditInput.propTypes = {
  /** Unique HTML ID. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** Function to call onChange text input */
  onChange: PropTypes.func.isRequired,

  /** Function to call onCick button */
  onClick: PropTypes.func.isRequired
};

export default EditInput;
