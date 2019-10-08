import React from "react";
import Item from "../components/Item";
import { Wrapper, AddItem } from '../style/Items';

export default function Items({
	isEdited,
	lists,
	setTimer,
	setLists,
	handleSetEvent,
	filterLists,
	handleEditData
}) {
	function handleSetTimer(hour, minute, second) {
		setTimer({ hour, minute, second });
	}

	return (
		<Wrapper>
			{lists.length > 0 &&
				lists.map(list => {
					return (
						<Item
							key={list.id}
							{...{
								isEdited,
								list,
								filterLists,
								handleSetTimer,
								handleEditData
							}}
						/>
					);
				})}
			{!isEdited && (
				<AddItem href="##" onClick={handleSetEvent}>
					+
				</AddItem>
			)}
		</Wrapper>
	);
}