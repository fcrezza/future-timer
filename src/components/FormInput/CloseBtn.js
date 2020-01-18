import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCloseBtn = styled.a`
  position: absolute;
  top: 5px;
  left: 20px;
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 500;
  color: #e02272;
`

const CloseBtn = ({handleClick}) => (
  <StyledCloseBtn href="#" onClick={handleClick}>
    x
  </StyledCloseBtn>
)

export default CloseBtn

CloseBtn.propTypes = {
  handleClick: PropTypes.func
}
