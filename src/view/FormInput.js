import React, { useState, useEffect } from "react";
import ListInput from "./ListInput";
import Button from "../components/Button";
import CloseBtn from '../components/CloseBtn';
import { Overlay } from '../style/FormInput';

function getId(editedData, lists) {
	if (Object.keys(editedData).length > 0) {
		return editedData.id;
	} else if (lists.length > 0) {
		const lastIndex = lists.map(list => list.id).sort((x, y) => x - y);
		return lastIndex[lastIndex.length - 1] + 1;
	} else {
		return 1;
	}
}

export default function FormInput({
	editedData,
	handleEditData,
	handleSetEvent,
	lists,
	setLists
}) {
	const [id] = useState(() => getId(editedData, lists));
	const [value, setValue] = useState({
		id: id,
		name: "",
		duration: {
			hour: "",
			minute: "",
			second: ""
		}
	});

	useEffect(() => {
		if (Object.keys(editedData).length > 0) {
			setValue({ ...value, ...editedData });
		}

		return () => {
			handleEditData({});
			handleSetEvent();
		};
		//eslint-disable-next-line
	}, []);

	function handleSetValue(id, e) {
		setValue({
			...value,
			duration: {
				...value.duration,
				[id]: e
			}
		});
	}

	function handleChange(e) {
		setValue({ ...value, name: e });
	}

	function handleSubmit() {
		const newLists = lists.filter(list => list.id !== value.id);
		setLists([...newLists, value]);
		setValue({
			...value,
			name: "",
			duration: { hour: "", minute: "", second: "" }
		});
		handleSetEvent();
	}

	return (
		<Overlay>
			<form onSubmit={handleSubmit}>
				<CloseBtn href="##" handleSetEvent={handleSetEvent} />
				<div className="wrapper">
					<div className="row">
						<label htmlFor="label">Label:</label>
						<input
							className="text-input"
							type="text"
							id="label"
							value={value.name}
							onChange={e => handleChange(e.target.value)}
						/>
					</div>
					<div className="row">
						<ListInput timer={value.duration} handleSetTimer={handleSetValue} />
					</div>
				</div>
				<Button
					text="Simpan"
					handleSubmit={handleSubmit}
					value={value.duration}
				/>
			</form>
		</Overlay>
	);
}