import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 3px solid ${props => props.theme.primaryLight};
  font-size: 2rem;
  box-sizing: border-box;
`;

const TextInput = ({ htmlId, name, placeholder, value, onChange }) => (
  <Input
    type="text"
    htmlId={htmlId}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

TextInput.defaultProps = {
  placeholder: 'Write something'
};

TextInput.propTypes = {
  /** Unique HTML ID. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** Function to call onChange text input */
  onChange: PropTypes.func.isRequired
};

export default TextInput;
