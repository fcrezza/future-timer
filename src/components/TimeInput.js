import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 0 14px;
`;

const InputItem = styled.input`
	background: transparent;
	font-weight: 700;
	font-size: 3rem;
	border: none;
	outline: none;
	text-align: right;
	width: 60px;
	padding: 0;
	-moz-appearance: textfield;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const InputText = styled.span`
	font-weight: 600;
`;

const TimeInput = ({ max, text }) => {
	return (
		<Wrapper>
			<InputItem type="number" max={max} min={0} value={0} />
			<InputText>{text}</InputText>
		</Wrapper>
	);
};

export default TimeInput;
