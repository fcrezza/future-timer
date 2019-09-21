import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
	text-decoration: none;
	color: #fff;
	font-weight: 600;
	display: block;
	border-radius: 5px;
	background-color: #2100ec;
	padding: 10px;
	margin-top: 20px;
	text-align: center;
	outline: none;
	cursor: pointer;
	margin-bottom: 30px;
`


const Button = () => {
	return (
		<StyledButton>Mulai</StyledButton>
	)
}

export default Button