import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'

const StyledDuration = styled.span`
  overflow: hidden;
  font-size: 1rem;

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`

const ItemDuration = ({children}) => <StyledDuration>{children}</StyledDuration>

export default ItemDuration

ItemDuration.propTypes = {
  children: PropTypes.string
}
