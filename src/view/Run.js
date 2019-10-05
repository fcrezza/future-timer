import React, { useState, useEffect, Fragment } from "react";
import styled from 'styled-components'
import Button  from '../components/Button'

const CloseBtn = styled.button`
		top: 4px;
		left: 18px;
		text-decoration: none;
		font-size: 1.7rem;
		font-weight: 500;

`

const Timer = styled.div`
	width: 65%;
	height: 310px;
	margin: 40px auto;
	color: #fff;
	border-radius: 50%;
	background-color: rgb(33, 0, 236, .8);;
	border: 7px solid #e02272;
	display: flex;
	align-items: center;
	justify-content: center;

	.timer-value {
		margin: 5px;
		font-size: 1.3rem;
	}
`

function Run({timer, history}) {
	const [runTimer, setRunTimer] = useState({...timer})
	const [stop, setStop] = useState(false)

	const {hour, minute, second} = runTimer
	const year = new Date().getFullYear()
	const month = new Date().getMonth()
	const day = new Date().getDate()
	const hours = new Date().getHours() + Number(hour)
	const minutes = new Date().getMinutes() + Number(minute)
	const seconds = new Date().getSeconds() + Number(second)

	var end = new Date(year, month, day, hours, minutes, seconds).getTime();
	const now = end - new Date().getTime();
	const getHour = Math.floor(now % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString()
	const getMinute = Math.floor(now % (1000 * 60 * 60) / (1000 * 60)).toString()
	const getSecond = Math.floor((now % (1000 * 60)) / 1000).toString();

	useEffect(() => {
		console.log((now % 2 * 100))
		if (now < 1) {
			setTimeout(() => {
		 		handleClose()
			}, 1000)
		}
			var myInt = setInterval(() => {
				console.log(getSecond)
				setRunTimer({hour: getHour, minute: getMinute, second: getSecond});
			}, 1000);			

		return () => {
			clearInterval(myInt);
		};
	}, [runTimer, now]);

	function handleClose() {
		history.push('/')
	}

	function toggleAction() {
		setStop(prev => !prev)
	}

	return (
		<Fragment>
			<CloseBtn as="a" href="#!" onClick={handleClose}>x</CloseBtn>
			<Timer>
				<div className="wrapper">
					<span className="timer-value">{runTimer.hour} Jam</span>
					<span className="timer-value">{runTimer.minute} Menit</span>
					<span className="timer-value">{runTimer.second} Detik</span>
				</div>
			</Timer>
			<Button text={stop ? "Lanjutkan" : "Berhenti"} handleSubmit={toggleAction}/>
		</Fragment>

	);
};

export default Run;
