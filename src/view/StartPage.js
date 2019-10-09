import React, { useState, Fragment, useEffect, useRef } from "react";
import Header from "./Header";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import Button from "../components/Button";
import Alarm from '../assets/alarm.mp3';

export default function StartPage({ setTimer, timer, history, isPlaying, setIsPlaying }) {
	const [lists, setLists] = useState([
		{ id: 1, name: "Lari", duration: { hour: "0", minute: "30", second: "30" } },
		{ id: 2, name: "Mandi", duration: { hour: "0", minute: "5", second: "0" } }
	]);
	const myRef = useRef(null);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('listItem'));
		if(data) {
			setLists(data);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('listItem', JSON.stringify(lists));
	}, [lists]);

	useEffect(() => {
		if(isPlaying) {
			myRef.current.play();
		}
		//eslint-disable-next-line
	}, []);

	function handleSetTimer(id, value) {
		setTimer({ ...timer, [id]: value });
	}

	function startTimer() {
		history.push("/run");
	}

	return (
		<Fragment>
			<audio src={Alarm} ref={myRef} onEnded={() => setIsPlaying(false)}></audio>
			<Header isPlaying={isPlaying}/>
			<ListInput timer={timer} handleSetTimer={handleSetTimer} />
			<ListItem lists={lists} setLists={setLists} setTimer={setTimer} />
			<Button text="Mulai" handleSubmit={startTimer} value={timer}/>
		</Fragment>
	);
}