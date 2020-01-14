import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  background: #e5e5e5;
  font-weight: 700;
  font-size: 2.6rem;
  outline: none;
  padding: 8px;
  text-align: center;
  width: 68px;
  height: 63px;
  -moz-appearance: textfield;
  &::placeholder {
    color: #333;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media ${device.mobileL} {
    width: 60px;
    height: 55;
    font-size: 2rem;
  }
`

const TimeInput = ({id, value, onChange, ...props}) => (
  <StyledInput
    type="number"
    placeholder="0"
    id={id}
    value={value}
    onChange={onChange}
    {...props}
  />
)

export default TimeInput

TimeInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
