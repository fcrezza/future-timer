import styled from "styled-components";
import { device } from '../logic/device'

export const Wrapper = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

export const AddItem = styled.a`
	display: block;
	text-align: center;
	text-decoration: none;
	background-color: #e3e3e3;
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 2rem;
	font-weight: 600;
	color: #2100ec;

	@media ${device.mobileL} {
		font-size: 1.7rem;
		height: 120px;
	}
`;
