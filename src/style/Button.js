import styled from "styled-components";

export const StyledButton = styled.button`
	text-decoration: none;
	color: #fff;
	font-weight: 600;
	display: block;
	width: ${props => (props.width ? "40%" : "100%")};
	border-radius: 5px;
	background-color: ${props =>
		props.secondary
			? "#e02272"
			: props.disabled
			? "rgba(0,0,255, .8)"
			: "#2100ec"};
	padding: 12px;
	margin-top: 20px;
	text-align: center;
	border: none;
	outline: none;
	cursor: ${props => (props.disabled ? "default" : "pointer")};
	margin-bottom: 30px;
`;