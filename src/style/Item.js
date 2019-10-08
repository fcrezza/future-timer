import styled from "styled-components";
import { device } from '../logic/device';

export const StyleItem = styled.div`
	text-align: center;
	background-color: #e3e3e3;
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	padding: 10px

	@media ${device.mobileL} {
		height: 120px
	}

	.item-img {
		width: 37px;

		@media ${device.mobileL} {
			height: 30px
		}		
	}

	.item-name {
		font-size: 0.85rem;
		margin-top: 10px;
		color: #444;

		@media ${device.mobileL} {
			font-size: .72rem
		}
	}

	.item-duration {
		overflow: hidden;
		font-size: 1rem;

		@media ${device.mobileL} {
			font-size: .8rem;
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.start-item {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.remove-item {
		font-weight: 600;
		color: #e02272;
		position: absolute;
		top: 1px;
		right: 13px;
		outline: none;
		text-decoration: none;
		font-size: 1.4rem;

		@media ${device.mobileL} {
			font-size: 1.2rem
		}
	}

	.edit-item {
		text-decoration: none;
		color: #e02272;
		z-index: 1;
		font-weight: 500;

		@media ${device.mobileL} {
			font-size: .8rem;
		}
	}
`;