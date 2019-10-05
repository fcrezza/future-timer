import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
	text-decoration: none;
	color: #fff;
	font-weight: 600;
	display: block;
	width: ${props => props.width ? "40%" : "100%"};
	border-radius: 5px;
	background-color: ${props => props.secondary ? "#e02272" : "#2100ec"};
	padding: 10px;
	margin-top: 20px;
	text-align: center;
	outline: none;
	cursor: pointer;
	margin-bottom: 30px;
`

const Button = ({text, handleSubmit, width=false, secondary=false}) => {
	return <StyledButton onClick={handleSubmit} width={width ? 1 : 0} secondary={secondary ? 1 : 0}>{text}</StyledButton>
}

export default Button