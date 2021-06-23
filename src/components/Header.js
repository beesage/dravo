import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./UserProfile-Header.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles } from "@material-ui/core/styles";

export default function Header() {
	const [isUserProfile, setIsUserProfile] = useState(false);
	const [isLoginPage, setIsLoginPage] = useState(true);

	/**
	 * Display the header component according to the location of the app
	 * <p>
	 * useLocation is a React Hook that returns the location object that represents the current URL.
	 * <p>
	 * When used inside useEffect, it is possible to conditionally check whether the key "pathname" corresponds to a certain location. If the app is on the url whose endpoint correspond to "/profile", setIsUserProfile state changes to true; if it correponds to "/" or "/signup", setIsUserProfile and setIsLoginPage states both change to false; if it corresponds to "/leaderboard", setIsUserProfile change again to false.
	 *
	 * @function useEffect a React Hook used to perform side effect operations in function components.
	 * @return the location of the app.
	 * @author Alessandra Pettinato
	 */

	console.log(location);

	useEffect(() => {
		if (location.pathname == "/profile") {
			setIsUserProfile(true);
		} else if (location.pathname == "/" || location.pathname == "/signup") {
			setIsUserProfile(false);
			setIsLoginPage(false);
		} else if (location.pathname == "/leaderboard") {
			setIsUserProfile(false);
		}
	}, []);

	const NavBar = withStyles({
		root: {
			backgroundColor: "#F2A154",
			padding: "0.5rem",
			boxShadow: "none",
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
		<div className={!isLoginPage ? "hidden" : "header-container"}>
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
								position: "absolute",
								fontSize: "30px",
								right: "1rem",
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
