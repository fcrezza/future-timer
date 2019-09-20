import React from "react";
import styled from "styled-components";
import TimeInput from "./TimeInput";

const Wrapper = styled.div`
	margin-top: 55px;
	display: flex;
	justify-content: center;
`;

const ListInput = () => {
	return (
		<Wrapper>
			<TimeInput max={24} text="Jam" />
			<TimeInput max={60} text="Menit" />
			<TimeInput max={60} text="Detik" />
		</Wrapper>
	);
};

export default ListInput;
