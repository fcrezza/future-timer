import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'

const StyledLabel = styled.label`
  margin-right: 15px;
  font-size: 1.2rem;

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`

const FormInputLabel = ({id, children}) => (
  <StyledLabel htmlFor={id}>{children}</StyledLabel>
)

export default FormInputLabel

FormInputLabel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string
}
