import React from "react";
import "./styles/StyleFooter";

import { Container, Grid, Box } from "@material-ui/core";
import useStylesFooter from "./styles/StyleFooter";
import "./styles/Footer.css";

export default function Footer() {
	const classes = useStylesFooter();
	return (
		<>
			<footer>PORCA PUTTANA</footer>
		</>
	);
}
