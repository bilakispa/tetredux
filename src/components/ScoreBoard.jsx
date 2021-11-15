import React from "react";
import { useSelector } from "react-redux";

// Styling
import "../sass/scoreboard.scss";

// Component Definition
export default function ScoreBoard() {
	// Store
	const score = useSelector((state) => state.game.score);

	// Render
	return (
		<div className="scoreboard">
			<h1>SCORE</h1>
			<h2>{score}</h2>
		</div>
	);
}
