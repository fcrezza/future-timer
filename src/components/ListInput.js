import React from "react";
import styled from "styled-components";
import TimeInput from "./TimeInput";

const Wrapper = styled.div`
	margin-top: 55px;
	display: flex;
	justify-content: center;
`;

const ListInput = ({timer, handleSetTimer}) => {
	return (
		<Wrapper>
			<TimeInput 
				id="hour" 
				text="Jam" 
				time={timer.hour} 
				handleSetTimer={handleSetTimer}/>
			<TimeInput 
				id="minute" 
				text="Menit" 
				time={timer.minute} 
				handleSetTimer={handleSetTimer}/>
			<TimeInput 
				id="second" 
				text="Detik" 
				time={timer.second} 
				handleSetTimer={handleSetTimer}/>
		</Wrapper>
	);
};

export default ListInput;
