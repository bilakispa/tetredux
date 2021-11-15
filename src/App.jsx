import React from "react";

// Components
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import AppFooter from "./components/AppFooter";

// Hooks
import useKeyListener from "./hooks/useKeyListener";

// Styling
import "./sass/app.scss";

// Component Definition
function App() {
	useKeyListener();

	// Render
	return (
		<div className="app">
			<AppHeader />
			<AppBody />
			<AppFooter />
		</div>
	);
}

export default App;
