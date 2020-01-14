import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const StyledButton = styled.button`
  text-decoration: none;
  color: #f1f1f1;
  font-weight: 600;
  display: block;
  width: 100%;
  border-radius: 5px;
  background-color: ${({disabled}) =>
    disabled ? 'rgba(0,0,255, .6)' : '#2100ec'};
  padding: 12px;
  margin-top: 20px;
  text-align: center;
  border: none;
  outline: none;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  margin-bottom: 20px;
`

const Button = ({children, disabled, onClick}) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
)

export default Button

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
