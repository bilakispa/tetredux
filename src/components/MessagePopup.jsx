import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

// Styling
import "../sass/message-popup.scss";

// Utils
import { START_GAME, GAME_PAUSED, GAME_OVER } from "../utils/strings";

// Component Definition
export default function MessagePopup() {
	// State
	const [message, setMessage] = useState(START_GAME);

	// Store
	const gameStarted = useSelector((state) => state.game.started);
	const gamePaused = useSelector((state) => state.game.paused);

	useEffect(() => {
		if (gameStarted) {
			if (gamePaused) {
				setMessage(GAME_PAUSED);
			} else {
				setMessage("");
			}
		} else {
			if (gamePaused) {
				setMessage(START_GAME);
			} else {
				setMessage(GAME_OVER);
			}
		}
	}, [message, gameStarted, gamePaused]);

	// Render
	return (
		<div
			className={cx("message-popup", {
				show: !gameStarted || gamePaused,
			})}
		>
			<h1>{message}</h1>
		</div>
	);
}
