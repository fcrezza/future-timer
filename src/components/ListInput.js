import React from "react";
import styled from "styled-components";
import TimeInput from "./TimeInput";

const Wrapper = styled.div`
	margin-top: 55px;
	display: flex;
	justify-content: center;
`;

const ListInput = ({timer, setTimer}) => {
	return (
		<Wrapper>
			<TimeInput id="hour" text="Jam" time={timer.hour} {...{timer, setTimer}}/>
			<TimeInput id="minute" text="Menit" time={timer.minute} {...{timer, setTimer}}/>
			<TimeInput id="second" text="Detik" time={timer.second} {...{timer, setTimer}}/>
		</Wrapper>
	);
};

export default ListInput;
