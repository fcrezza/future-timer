import React, { Fragment } from "react";
import {StyleItem} from '../style/Item';
import img from "../assets/icon.svg";

export default function Item({ isEdited, list, filterLists, handleSetTimer, handleEditData }) {
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
						<div className="overlay"></div>
						<a
							href="#!"
							className="remove-item"
							onClick={() => filterLists(id)}>
							-
						</a>
						<a
							href="#!"
							className="edit-item"
							onClick={() => handleEditData(list)}>
							Edit
						</a>
					</Fragment>
				)}
			</Fragment>
		</StyleItem>
	);
}