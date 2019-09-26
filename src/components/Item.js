import React, { Fragment } from "react";
import styled from "styled-components";
import img from "../assets/icon.svg";

const StyleItem = styled.div`
	text-align: center;
	background-color: #e3e3e3;
	width: 100%;
	height: 155px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;

	.item-img {
		width: 37px;
	}

	.item-name {
		font-size: 0.85rem;
		margin-top: 10px;
		color: #444;
	}

	.item-duration {
		overflow: hidden;
		font-size: 1rem;
	}

	.blurer {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.start-item {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.remove-item {
		font-weight: 600;
		color: #e02272;
		position: absolute;
		top: 1px;
		right: 13px;
		outline: none;
		text-decoration: none;
		font-size: 1.4rem;
	}

	.edit-item {
		text-decoration: none;
		color: #e02272;
		z-index: 1;
		font-weight: 500;
	}
`;

const Item = ({
	isEdited,
	list,
	filterLists,
	handleSetTimer,
	handleEditData
}) => {
	const { duration, id } = list;
	const { hour, minute, second } = duration;
	let textDuration = "";

	if (hour > 0) {
		textDuration += `${hour} Jam `;
	}
	if (minute > 0) {
		textDuration += `${minute} Menit `;
	}
	if (second > 0) {
		textDuration += `${second} Detik`;
	}

	return (
		<StyleItem>
			<Fragment>
				<img className="item-img" src={img} alt="" />
				<span className="item-name">{list.name}</span>
				{!isEdited && (
					<Fragment>
						<span className="item-duration">{textDuration}</span>
						<a
							href="#!"
							className="start-item"
							onClick={() => handleSetTimer(hour, minute, second)}>
							{" "}
						</a>
					</Fragment>
				)}
				{isEdited && (
					<Fragment>
						<div className="blurer"></div>
						<a
							href="#!"
							className="remove-item"
							onClick={() => filterLists(id)}>
							-
						</a>
						<a href="#!" className="edit-item" onClick={() => handleEditData(list)}>
							Edit
						</a>
					</Fragment>
				)}
			</Fragment>
		</StyleItem>
	);
};

export default Item;
