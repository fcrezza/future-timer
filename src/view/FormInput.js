import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListInput from "../components/ListInput";
import Button from "../components/Button";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;

	form {
		position: absolute;
		width: 460px;
		height: 60%;
		background-color: #f1f1f1;
		padding: 16px;
	}

	.close-btn {
		position: absolute;
		top: 4px;
		left: 18px;
		text-decoration: none;
		font-size: 1.7rem;
		font-weight: 500;
	}

	.wrapper {
		margin-top: 60px;
	}

	.row {
		margin: 30px 0;
		display: flex;
		align-items: center;
		justify-content: center;

		&:nth-child(2) {
			margin-top: -40px;
		}
	}

	label {
		margin-right: 15px;
		font-size: 1.2rem;
	}

	.text-input {
		width: 85%;
		height: 40px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1.1rem;
		padding: 0 8px;
		outline: none;
	}
`;

const FormInput = ({
	editedData,
	handleEditData,
	handleSetEvent,
	lists,
	setLists
}) => {
	let id;
	const [value, setValue] = useState({
		id: 1,
		name: "",
		duration: {
			hour: "",
			minute: "",
			second: ""
		}
	});

	useEffect(() => {
		if (Object.keys(editedData).length > 0) {
			id = editedData.id;
			setValue({ ...value, ...editedData });
		} else if (lists.length > 0) {
			const lastIndex = lists.map(list => list.id).sort((x, y) => x - y);
			id = lastIndex[lastIndex.length - 1] + 1;
			setValue({ ...value, id: id });
		}

		return () => {
			handleEditData({});
			handleSetEvent();
		};
	}, []);

	console.log(value);

	const handleSetValue = (id, e) => {
		setValue({
			...value,
			duration: {
				...value.duration,
				[id]: e
			}
		});
	};

	const handleChange = e => {
		setValue({ ...value, name: e });
	};

	const handleSubmit = () => {
		const newLists = lists.filter(list => list.id !== value.id);
		setLists([...newLists, value]);
		setValue({
			...value,
			name: "",
			duration: { hour: "", minute: "", second: "" }
		});
		handleSetEvent();
	};

	return (
		<Overlay>
			<form>
				<a href="#!" className="close-btn" onClick={handleSetEvent}>
					x
				</a>
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
				<Button text="Simpan" handleSubmit={handleSubmit} />
			</form>
		</Overlay>
	);
};

export default FormInput;
