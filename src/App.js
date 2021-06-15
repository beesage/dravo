import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import "./styles.css";

export default function App() {
	return (
		<div className="container">
			<Router>
				<Header />
			</Router>
		</div>
	);
}
