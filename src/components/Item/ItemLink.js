import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const ItemLink = ({handleClick}) => (
  <StyledLink href="#" onClick={handleClick} />
)

export default ItemLink

ItemLink.propTypes = {
  handleClick: PropTypes.func
}
