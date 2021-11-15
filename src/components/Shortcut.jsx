import React from "react";

// Styling
import "../sass/shortcut.scss";

// Component Definition
export default function Shortcut({ title, description }) {
	// Render
	return (
		<div className="shortcut">
			<kbd>{title}</kbd>
			<span>{description}</span>
		</div>
	);
}
