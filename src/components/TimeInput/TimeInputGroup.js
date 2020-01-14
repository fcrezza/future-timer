import React from 'react'
import styled from 'styled-components'

const StyledInputGroup = styled.div`
  &:not(:first-child) {
    margin-left: 1.5rem;
  }
`

const TimeInputGroup = ({children}) => (
  <StyledInputGroup>{children}</StyledInputGroup>
)

export default TimeInputGroup
