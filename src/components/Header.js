import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {device} from '../utils/device'

const Heading = styled.header`
  text-align: center;
  margin-top: 25px;
`

const Title = styled.h1`
  font-weight: 400;
  margin: 0 0 -13px;

  .special {
    color: #2100ec;
  }

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`

const Subtitle = styled.p`
  color: #555;
  font-size: 1.2rem;

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`

const Header = ({isPlaying}) => (
  <Heading>
    {isPlaying && <p>Berdering...</p>}
    <Title>
      Future <span className="special">Timer</span>
    </Title>
    <Subtitle>Atur dan buat harimu lebih produktif</Subtitle>
  </Heading>
)

export default Header

Header.propTypes = {
  isPlaying: PropTypes.bool
}
