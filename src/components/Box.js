import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledBox = styled.div`
  background: #e5e5e5;
  height: 80px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 45px;
  font-weight: 600;
  color: #444;
`

const Box = ({children}) => <StyledBox>{children}</StyledBox>

export default Box

Box.propTypes = {
  children: PropTypes.node
}
