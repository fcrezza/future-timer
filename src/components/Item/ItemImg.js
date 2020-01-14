import React from 'react'
import styled from 'styled-components'
import {device} from '../../utils/device'
import img from '../../assets/icon.svg'

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;

  @media ${device.mobileL} {
    height: 30px;
    width: 30px;
  }
`

const ItemImg = () => <StyledImg src={img} alt="" />

export default ItemImg
