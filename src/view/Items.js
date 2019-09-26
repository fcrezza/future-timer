import React from "react";
import styled from "styled-components";
import Item from "../components/Item";

const Wrapper = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const AddItem = styled.a`
	display: block;
	text-align: center;
	text-decoration: none;
	background-color: #e3e3e3;
	width: 100%;
	height: 155px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 2rem;
	font-weight: 600;
	color: #2100ec;
`

const Items = ({isEdited, lists, setTimer, setLists, handleSetEvent, filterLists , handleEditData}) => {
	const handleSetTimer = (hour, minute, second) => {
		setTimer({hour, minute, second})
	}

	return (
		<Wrapper>
			{lists.length > 0 && lists.map(list => {
				return (
					<Item key={list.id} {...{isEdited, list, filterLists, handleSetTimer, handleEditData}} />
				)
			})}
				{!isEdited && <AddItem href="#!" onClick={handleSetEvent}>+</AddItem>}
		</Wrapper>
	);
};

export default Items;
