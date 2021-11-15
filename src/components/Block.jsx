import React from "react";

// Styling
import "../sass/block.scss";

// Component Definition
export default function Block({ colorIndex }) {
	// Render
	return <div className={`block color-${colorIndex}`}></div>;
}
