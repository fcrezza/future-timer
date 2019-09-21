import React from "react";
import styled from "styled-components";
import Item from "../components/Item";

const Wrapper = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const Items = ({isEdited, lists, setTimer, setLists}) => {
	const filterLists = (id) => {
		const filteredLists = lists.filter(list => list.id !== id)
		setLists(filteredLists)
	}

	return (
		<Wrapper>
		{lists.length > 0 && lists.map(list => {
			return (
				<Item key={list.id} {...{isEdited, list, filterLists, setTimer}} />
			)
		})}
			{!isEdited && <Item addBtn {...{isEdited, list, filterLists, setTimer}}/>}
		</Wrapper>
	);
};

export default Items;
