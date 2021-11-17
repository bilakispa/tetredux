import React from "react";
import { useSelector } from "react-redux";

// Components
import Block from "./Block";

// Styling
import "../sass/preview-field.scss";

export default function PreviewField() {
	const FIRST_ROTATION = 0;

	// Store
	const nextShape = useSelector((state) => state.tetromino.nextShape);

	// Render
	return (
		<div className="preview-field">
			<h1>Preview</h1>

			<div className="preview">
				{nextShape &&
					nextShape[FIRST_ROTATION].map((row, rowIndex) =>
						row.map((col, colIndex) => (
							<Block
								key={`preview-${rowIndex}${colIndex}`}
								colorIndex={col}
							/>
						))
					)}
			</div>
		</div>
	);
}
