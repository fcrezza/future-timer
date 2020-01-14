import React from 'react'
import styled from 'styled-components'
import {device} from '../../utils/device'
import PropTypes from 'prop-types'

const StyledLabel = styled.label`
  font-size: 1.1rem;
  display: block;
  color: #333;
  text-align: center;
  margin-top: 5px;
  font-weight: 600;

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`

const TimeInputLabel = ({children, id}) => (
  <StyledLabel htmlFor={id}>{children}</StyledLabel>
)

export default TimeInputLabel

TimeInputLabel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string
}
