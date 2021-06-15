import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

export default function Header() {
	const NavBar = withStyles({
		root: {
			backgroundColor: "#F2A154",
			boxShadow: "1px 1px",
		},
	})(AppBar);

	const Tool = withStyles({
		root: {
			display: "flex",
			justifyContent: "space-evenly",
		},
	})(Toolbar);

	return (
		<div className="header-container">
			<NavBar position="static" className=" lnav-bar">
				<Tool>
					<Link to="/leaderboard">
						<p className="menu-item">Leaderboard</p>
					</Link>
					<>
						<Link to="/profile">
							<p className="menu-item">Profile</p>
						</Link>
					</>
				</Tool>
			</NavBar>
		</div>
	);
}
