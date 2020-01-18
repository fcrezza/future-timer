import React, {memo} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {device} from '../../utils/device'

const StyledTitle = styled.h1`
  font-weight: 400;
  margin: 0 0 -13px;

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`
const Title = ({children}) => <StyledTitle>{children}</StyledTitle>

export default memo(Title)

Title.propTypes = {
  children: PropTypes.string
}
