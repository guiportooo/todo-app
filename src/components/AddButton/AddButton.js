import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const OutterDiv = styled.div`
  width: ${props => props.width};
`;

const RoundDiv = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border: none;
  border-radius: 50%;
  overflow: hidden;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};

  &:hover {
    background-color: ${props => props.theme.primaryLight};
  }

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.disabledLight};
      background-color: ${props => props.theme.disabled};

      &:hover {
        color: ${props => props.theme.disabledLight};
        background-color: ${props => props.theme.disabled};
      }
    `}
`;

const CenteredLabel = styled.label`
  display: block;
  width: 100%;
  padding-top: 50%;
  padding-bottom: 50%;
  text-align: center;
  line-height: 1em;
  margin-top: -0.5em;
  font-size: 1.5em;
  color: ${props => props.theme.white};
`;

const click = (disabled, onClick) => {
  if (!disabled) onClick();
};

const AddButton = ({ width, disabled, onClick }) => (
  <OutterDiv width={width}>
    <RoundDiv disabled={disabled}>
      <CenteredLabel
        disabled={disabled}
        onClick={click.bind(null, disabled, onClick)}
      >
        <FaPlus />
      </CenteredLabel>
    </RoundDiv>
  </OutterDiv>
);

AddButton.defaultProps = {
  width: '10%',
  disabled: false,
  onClick: () => console.log('click')
};

AddButton.propTypes = {
  /** Width of the button */
  width: PropTypes.string,

  /** No user action on button is allowed */
  disabled: PropTypes.bool,

  /** Click method */
  onClick: PropTypes.func
};

export default AddButton;
