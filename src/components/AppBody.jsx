import React from "react";

// Components
import GameField from "./GameField";
import PreviewField from "./PreviewField";
import ScoreBoard from "./ScoreBoard";
import MessagePopup from "./MessagePopup";
import Instructions from "./Instructions";

// Styling
import "../sass/app-body.scss";

// Component Definition
export default function AppBody() {
	// Render
	return (
		<div className="app-body">
			<div className="game-field">
				<GameField />
				<MessagePopup />
			</div>
			<div className="stats">
				<PreviewField />
				<ScoreBoard />
				<Instructions />
			</div>
		</div>
	);
}
