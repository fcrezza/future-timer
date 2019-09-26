import React, { useState } from "react";
import styled from "styled-components";
import Items from "./Items";
import FormInput from "./FormInput";

const StyledListItem = styled.div`
	margin-top: 50px;

	.edit-btn {
		text-decoration: none;
		color: #2100ec;
	}
`;

const ListItem = ({ lists, setLists, setTimer }) => {
	const [editData, setEditData] = useState({});
	const [event, setEvent] = useState(false);
	const [edit, setEdit] = useState(false);

	const handleSetEvent = () => {
		setEvent(prev => !prev);
	};

	const filterLists = (id) => {
		const filteredLists = lists.filter(list => list.id !== id)
		setLists(filteredLists)
	}

	const handleEditData = data => {
		setEditData(data);
		setEvent(prev => !prev);
	};

	return (
		<StyledListItem>
			<a className="edit-btn" href="#!" onClick={() => setEdit(prev => !prev)}>
				{edit ? "Batal" : "Edit"}
			</a>
			<Items
				isEdited={edit}
				{...{ lists, setLists, setTimer, handleSetEvent, handleEditData, filterLists }}
			/>
			{event && (
				<FormInput
					editedData={editData}
					handleSetEvent={handleSetEvent}
					{...{ lists, setLists, handleEditData}}
				/>
			)}
		</StyledListItem>
	);
};

export default ListItem;
