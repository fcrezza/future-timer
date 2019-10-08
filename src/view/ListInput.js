import React from "react";
import TimeInput from "../components/TimeInput";
import { Wrapper } from '../style/ListInput';

export default function ListInput({ timer, handleSetTimer }) {
	const {hour, minute, second} = timer

	return (
		<Wrapper>
			<TimeInput
				id="hour"
				text="Jam"
				time={hour}
				handleSetTimer={handleSetTimer}
			/>
			<TimeInput
				id="minute"
				text="Menit"
				time={minute}
				handleSetTimer={handleSetTimer}
			/>
			<TimeInput
				id="second"
				text="Detik"
				time={second}
				handleSetTimer={handleSetTimer}
			/>
		</Wrapper>
	);
}