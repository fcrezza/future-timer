import React from "react";
import styled from "styled-components";
import Item from "../components/Item";

const Wrapper = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const Items = ({isEdited, lists}) => {
	return (
		<Wrapper>
		{lists.map(list => {
			return (
				<Item key={list.id} {...{isEdited, list}} />
			)
		})}
		</Wrapper>
	);
};

export default Items;
