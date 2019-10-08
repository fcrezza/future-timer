import styled from "styled-components";
import { device } from '../logic/device';

export const Heading = styled.header`
	text-align: center;
	margin-top: 25px;
`;

export const Title = styled.h1`
	font-weight: 400;
	margin: 0 0 -13px;

	.special {
		color: #2100ec;
	}

	@media ${device.mobileL} {
		font-size: 1.8rem;
	}	
`;

export const Subtitle = styled.p`
	color: #333;
	font-size: 1.2rem;

	@media ${device.mobileL} {
		font-size: 1.1rem;
	}
`;