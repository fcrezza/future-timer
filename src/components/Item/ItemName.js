import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'

const StyledName = styled.span`
  font-size: 0.85rem;
  margin-top: 10px;
  color: #444;

  @media ${device.mobileL} {
    font-size: 0.72rem;
  }
`

const ItemName = ({children}) => <StyledName>{children}</StyledName>

export default ItemName

ItemName.propTypes = {
  children: PropTypes.string
}
