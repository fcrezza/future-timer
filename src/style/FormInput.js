import styled from "styled-components";
import { device }from '../logic/device';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 2;

	form {
		position: absolute;
		max-width: 460px;
		background-color: #f1f1f1;
		padding: 16px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.wrapper {
		margin-top: 60px;
	}

	.row {
		margin: 30px 0;
		display: flex;
		align-items: center;
		justify-content: center;

		&:nth-child(2) {
			margin-top: -40px;
		}
	}

	label {
		margin-right: 15px;
		font-size: 1.2rem;

		@media ${device.mobileL} {
			font-size: 1.1rem
		}
	}

	.text-input {
		width: 85%;
		height: 40px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1.1rem;
		padding: 0 8px;
		outline: none;
	}
`;