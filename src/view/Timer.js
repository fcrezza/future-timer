import React from 'react';
import Gif from "../assets/giphy.gif";
import Pause from "../assets/pause.gif";
import { Timer } from '../style/Timer';

export default function TimeRunner({stopTimer, hour, minute, second}) {
	return <Timer>
				<img src={!stopTimer ? Gif : Pause} alt="" />
				<div className="wrapper">
					<span className="timer-value">{hour} Jam</span>
					<span className="timer-value">{minute} Menit</span>
					<span className="timer-value">{second} Detik</span>
				</div>
		</Timer>
}