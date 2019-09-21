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
	&::placeholder {
		color: #333;
	}
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const InputText = styled.span`
	font-weight: 600;
`;

const TimeInput = ({ text, time, timer, setTimer, id }) => {

console.log(timer)

	return (
		<Wrapper>
			<InputItem
			placeholder="0"
				type="number"
				value={time}
				onChange={e => setTimer({ ...timer, [id]: e.target.value })}
			/>
			<InputText>{text}</InputText>
		</Wrapper>
	);
};

export default TimeInput;
