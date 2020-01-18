import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTimerBtn = styled.button`
  display: block;
  width: 60px;
  outline: none;
  height: 60px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background: #e1e1e1;
  }
`

const TimerBtn = ({children, onClick}) => (
  <StyledTimerBtn onClick={onClick}>{children}</StyledTimerBtn>
)

export default TimerBtn

TimerBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
