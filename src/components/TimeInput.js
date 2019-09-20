import React from "react";

const TimeInput = ({ max }) => {
	return <input type="number" max={max} min={0} />;
};

export default TimeInput;
