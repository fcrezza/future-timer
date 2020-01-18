import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Subtitle from './Subtitle'

const StyledHeader = styled.header`
  text-align: center;
  margin-top: 25px;
`

const Header = () => (
  <StyledHeader>
    <Title>Future Timer</Title>
    <Subtitle>Atur dan buat harimu lebih produktif</Subtitle>
  </StyledHeader>
)

export default Header
