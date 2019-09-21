import React from "react";
import styled from "styled-components";
import Items from "./Items";
import Button from "../components/Button"

const StyledListItem = styled.div`
	margin-top: 50px;

	.edit-btn {
		text-decoration: none;
		color: #2100ec;	

	}
`;

const ListItem = ({handleToggle, isEdited, lists, setLists, setTimer}) => {
	return (
		<StyledListItem>
			<a className="edit-btn" href="#!" onClick={handleToggle}>{isEdited ? "Batal" : "Edit"}</a>
			<Items {...{isEdited, lists, setLists, setTimer}} />
		</StyledListItem>
	);
};

export default ListItem;
