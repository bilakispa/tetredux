import React from "react";

// Styling
import "../sass/app-header.scss";

// Component Definition
export default function AppHeader() {
	// Render
	return (
		<div className="app-header">
			<h1>TETREDUX</h1>
			<h2>
				A <i>match-falling-blocks</i> clone, created with react &amp;
				redux
			</h2>
		</div>
	);
}
