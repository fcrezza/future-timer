import React, { useState, Fragment } from "react";
import Header from "./Header";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import Button from "../components/Button";

export default function StartPage({ setTimer, timer, history }) {
	const [lists, setLists] = useState([
		{ id: 1, name: "Lari", duration: { hour: "0", minute: "30", second: "30" } },
		{ id: 2, name: "Mandi", duration: { hour: "0", minute: "5", second: "0" } }
	]);

	function handleSetTimer(id, value) {
		setTimer({ ...timer, [id]: value });
	}

	function startTimer() {
		history.push("/run");
	}

	return (
		<Fragment>
			<Header />
			<ListInput timer={timer} handleSetTimer={handleSetTimer} />
			<ListItem lists={lists} setLists={setLists} setTimer={setTimer} />
			<Button text="Mulai" handleSubmit={startTimer} value={timer}/>
		</Fragment>
	);
}