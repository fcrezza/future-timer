import styled from "styled-components";
import { device } from '../logic/device';

export const Timer = styled.div`
	color: #333;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
	}

	.wrapper {
		background: #e3e3e3;
		text-align: center;
	}

	.timer-value {
		margin: 5px;
		font-size: 1.3rem;
		
		@media ${device.mobileL} {
			font-size: 1.1rem;
		}
	
	}
`;

export const ButtonWrapper = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	justify-content: space-around;
`;