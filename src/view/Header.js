import React from "react";
import {Heading, Title, Subtitle} from '../style/Header';

export default function Header({isPlaying}) {
	return (
		<Heading>
			{isPlaying && <p>Berdering...</p>}
			<Title>
				Future <span className="special">Timer</span>
			</Title>
			<Subtitle>Atur dan buat harimu lebih produktif</Subtitle>
		</Heading>
	);
}