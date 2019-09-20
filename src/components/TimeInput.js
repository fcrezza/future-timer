import React from "react";

const TimeInput = ({ max, text }) => {
	return (
		<div>
			<input type="number" max={max} min={0} />
			<span> {text}</span>
		</div>
	);
};

export default TimeInput;
