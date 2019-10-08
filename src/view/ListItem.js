import React, { useState } from "react";
import Items from "./Items";
import FormInput from "./FormInput";
import { StyledListItem } from '../style/ListItem';

export default function ListItem({ lists, setLists, setTimer }) {
	const [editData, setEditData] = useState({});
	const [event, setEvent] = useState(false);
	const [edit, setEdit] = useState(false);

	function handleSetEvent() {
		setEvent(prev => !prev);
	};

	function filterLists(id) {
		const filteredLists = lists.filter(list => list.id !== id);
		setLists(filteredLists);
	};

	function handleEditData(data) {
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
				{...{
					lists,
					setLists,
					setTimer,
					handleSetEvent,
					handleEditData,
					filterLists
				}}
			/>
			{event && (
				<FormInput
					editedData={editData}
					handleSetEvent={handleSetEvent}
					{...{ lists, setLists, handleEditData }}
				/>
			)}
		</StyledListItem>
	);
};