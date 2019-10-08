import React, { useState, useEffect, Fragment } from "react";
import Timer from './Timer';
import Button from "../components/Button";
import CloseBtn from '../components/CloseBtn';
import { getEndTime } from '../logic/getEndTime';
import { isEmpty } from '../logic/isEmpty';
import { ButtonWrapper } from '../style/Run';

export default function Run({ timer, history }) {
	const [runTimer, setRunTimer] = useState({ ...timer });
	const [stopTimer, setStopTimer] = useState(false);

	if (isEmpty(timer)) {
		history.push("/");
	}

	const { hour, minute, second } = runTimer;

	const now = getEndTime(hour, minute, second) - new Date().getTime();
	const getHour = Math.floor(
		(now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	).toString();
	const getMinute = Math.floor(
		(now % (1000 * 60 * 60)) / (1000 * 60)
	).toString();
	const getSecond = Math.floor((now % (1000 * 60)) / 1000).toString();

	useEffect(() => {
		if (now < 1) {
			var myTimo = setTimeout(() => {
				handleClose();
			}, 1000);
		}

		if (!stopTimer) {
			var myInt = setInterval(() => {
				setRunTimer({ hour: getHour, minute: getMinute, second: getSecond });
			}, 1000);
		}

		return () => {
			clearTimeout(myTimo);
			clearInterval(myInt);
		};
		//eslint-disable-next-line
	}, [runTimer, now, getHour, getMinute, getSecond, stopTimer]);

	function handleClose() {
		history.push("/");
	}

	function toggleAction() {
		setStopTimer(prev => !prev);
	}

	function reset() {
		setRunTimer({ ...timer });
		setStopTimer(false);
	}

	return (
		<Fragment>
			<CloseBtn as="a" href="#!" handleSetEvent={handleClose} />
			<Timer {...{stopTimer, hour, minute, second}}/>
			<ButtonWrapper>
				<Button
					text={stopTimer ? "Lanjutkan" : "Berhenti"}
					handleSubmit={toggleAction}
					width
				/>
				<Button text="Reset" handleSubmit={reset} width secondary />
			</ButtonWrapper>
		</Fragment>
	);
}