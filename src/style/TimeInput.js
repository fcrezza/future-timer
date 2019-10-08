import styled from "styled-components";
import { device } from '../logic/device';

export const Wrapper = styled.div`
	padding: 0 14px;
	text-align: center;

	.input-timer {
		background: #e3e3e3;
		font-weight: 700;
		font-size: 3rem;
		border: none;
		outline: none;
		text-align: center;
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

		@media ${device.mobileL} {
			width: 50px;
			font-size: 2rem;
		}		
	}

	.input-label {
		font-weight: 600;
		vertical-align: bottom;

		@media ${device.mobileL} {
			font-size: .8rem;
		}
	}
`;