import React from "react";
import { isEmpty } from '../logic/isEmpty';
import {StyledButton} from '../style/Button';

export default function Button({
	text,
	handleSubmit,
	width = false,
	secondary = false,
	value
}) {
	if (isEmpty(value)) {
		return <StyledButton disabled>{text}</StyledButton>;
	}

	return (
		<StyledButton
			onClick={handleSubmit}
			width={width ? 1 : 0}
			secondary={secondary ? 1 : 0}>
			{text}
		</StyledButton>
	);
};