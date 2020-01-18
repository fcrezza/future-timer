import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'

const StyledRemoveBtn = styled.a`
  font-weight: 600;
  color: #e02272;
  position: absolute;
  top: 1px;
  right: 13px;
  outline: none;
  text-decoration: none;
  font-size: 1.4rem;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`

const RemoveBtn = ({handleClick}) => (
  <StyledRemoveBtn href="#" onClick={handleClick}>
    -
  </StyledRemoveBtn>
)

export default RemoveBtn

RemoveBtn.propTypes = {
  handleClick: PropTypes.func
}
