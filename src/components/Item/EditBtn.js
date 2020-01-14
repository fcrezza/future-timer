import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'

const StyledEditBtn = styled.a`
  text-decoration: none;
  color: #e02272;
  z-index: 1;
  font-weight: 500;

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`

const EditBtn = ({handleClick}) => (
  <StyledEditBtn href="javascript:void(0)" onClick={handleClick}>
    Edit
  </StyledEditBtn>
)

export default EditBtn

EditBtn.propTypes = {
  handleClick: PropTypes.func
}
