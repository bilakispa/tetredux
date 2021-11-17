import React from "react";

// Images
import GithubLogo from "../github-logo.png";

// Styling
import "../sass/app-footer.scss";

// Component Definition
export default function AppFooter() {
	// Render
	return (
		<div className="app-footer">
			<a className="github" href="https://github.com/bilakispa/tetredux">
				<img src={GithubLogo} width="20px" alt="Github Logo" />
				<span>Github Repo</span>
			</a>
		</div>
	);
}
