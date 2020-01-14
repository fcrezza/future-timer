import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const StyledEditBtn = styled.a`
  text-decoration: none;
  z-index: 1;
  ${({color}) =>
    color &&
    css`
      color: ${color};
    `}
`

const EditBtn = ({children, color, onClick}) => {
  return (
    <StyledEditBtn href="javascript:void(0)" color={color} onClick={onClick}>
      {children}
    </StyledEditBtn>
  )
}

export default EditBtn

EditBtn.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.string
}
