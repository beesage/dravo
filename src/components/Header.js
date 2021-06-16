import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./UserProfile-Header.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles } from "@material-ui/core/styles";

export default function Header() {
	const [isUserProfile, setIsUserProfile] = useState(false);

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == "/profile") {
			setIsUserProfile(true);
		} else if (
			location.pathname == "/" ||
			location.pathname == "/leaderboard"
		) {
			setIsUserProfile(false);
		}
	}, [location.pathname]);

	const NavBar = withStyles({
		root: {
			backgroundColor: "#F2A154",
			padding: "0.5rem",
		},
	})(AppBar);

	const Tool = withStyles({
		root: {
			height: "4rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "1.5rem",
		},
	})(Toolbar);

	return (
		<div className="header-container">
			<NavBar position="static">
				<Tool>
					<Link to="/leaderboard">
						<p className="menu-item">Leaderboard</p>
					</Link>
					<Link to="/profile">
						<p className="menu-item">Profile</p>
					</Link>
					{isUserProfile ? (
						<SettingsIcon
							style={{
								color: "#314E52",
								position: "fixed",
								fontSize: "30px",
								right: "0.8rem",
							}}
						/>
					) : (
						false
					)}
				</Tool>
			</NavBar>
		</div>
	);
}
