import React from "react";

// Components
import Shortcut from "./Shortcut";

// Styling
import "../sass/instructions.scss";

// Component Definition
export default function Instructions() {
	// Render
	return (
		<div className="instructions">
			<h1>Instructions</h1>

			<Shortcut title="Space" description="Start Game" />
			<Shortcut title="P" description="Pause / Resume" />
			<Shortcut title="&larr;" description="Move Left" />
			<Shortcut title="&rarr;" description="Move Right" />
			<Shortcut title="&darr;" description="Drop" />
			<Shortcut title="&uarr;" description="Rotate" />
		</div>
	);
}
