import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./styles/Header.css";
import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";

import { MdSettings } from "react-icons/md";

import handleHeader from "./Functions/HandleHeader";
import SettingsHeader from "./SettingsHeader";

export default function Header() {
	const {
		isUserProfile,
		setIsUserProfile,
		isLoginPage,
		setIsLoginPage,
		isEditProfile,
		setIsEditProfile,
		handleEditProfile,
	} = handleHeader();

	/**
	 * Display the header component according to the location of the app
	 * <p>
	 * useLocation is a React Hook that returns the location object that represents the current URL.
	 * <p>
	 * When used inside useEffect, it is possible to conditionally check whether the key "pathname" corresponds to a certain location. If the app is on the url whose endpoint correspond to "/profile", setIsUserProfile state changes to true; if it correponds to "/" or "/signup", setIsUserProfile and setIsLoginPage states both change to false; if it corresponds to "/leaderboard", setIsUserProfile changes again to false.
	 *
	 * @author Alessandra Pettinato
	 */

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == "/profile") {
			setIsUserProfile(true);
			setIsEditProfile(false);
		} else if (location.pathname == "/" || location.pathname == "/signup") {
			setIsUserProfile(false);
			setIsLoginPage(true);
		} else if (location.pathname == "/leaderboard") {
			setIsUserProfile(false);
		} else if (location.pathname == "/settings") {
			setIsUserProfile(false);
			setIsLoginPage(false);
		}
	}, [location.pathname]);

	return (
		<div className={isLoginPage ? "hidden" : "header-container"}>
			{!isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool>
						<Link to="/leaderboard">
							<p className="menu-item">Leaderboard</p>
						</Link>
						<Link to="/profile">
							<p className="menu-item">Profile</p>
						</Link>
						{isUserProfile ? (
							<NavLink
								to="/settings"
								style={{ position: "absolute", right: "0.8rem" }}
								onClick={handleEditProfile}
							>
								<MdSettings className={isUserProfile ? "setting" : "hidden"} />
							</NavLink>
						) : (
							false
						)}
						<img
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1624468065/Dravo/Header-logo.png"
							className="header-logo"
						/>
					</Tool>
				</NavBar>
			) : (
				<SettingsHeader />
			)}
		</div>
	);
}
