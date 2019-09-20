import React from "react";
import styled from "styled-components";

const Heading = styled.header`
	text-align: center;
	margin-top: 25px;
`;

const Title = styled.h1`
	font-weight: 400;
	margin: 0 0 -13px;
`;

const TitleSpecial = styled(Title)`
	color: #2100ec;
`;

const Subtitle = styled.p`
	color: #333;
	font-size: 1.2rem;
`;

const Header = () => {
	return (
		<Heading>
			<Title>
				Future <TitleSpecial as="span">Timer</TitleSpecial>
			</Title>
			<Subtitle>Atur dan buat harimu lebih produktif</Subtitle>
		</Heading>
	);
};

export default Header;
