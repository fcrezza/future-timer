import React, {memo} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {device} from '../../utils/device'

const StyledSubtitle = styled.p`
  color: #555;
  font-size: 1.2rem;

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`
const Subtitle = ({children, ...rest}) => (
  <StyledSubtitle {...rest}>{children}</StyledSubtitle>
)

export default memo(Subtitle)

Subtitle.propTypes = {
  children: PropTypes.string
}
