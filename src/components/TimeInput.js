import React from "react";
import { Wrapper } from '../style/TimeInput';

export default function TimeInput({ text, time, handleSetTimer, id }) {
	return (
		<Wrapper>
			<input
				className="input-timer"
				placeholder="0"
				type="number"
				value={time}
				onChange={e => handleSetTimer(id, e.target.value)}
			/>
			<span className="input-label">{text}</span>
		</Wrapper>
	);
}