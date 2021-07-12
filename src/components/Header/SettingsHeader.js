import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import PersonalHeader from "./PersonalHeader";
import ProfileHeader from "./ProfileHeader";

import "./styles/Header.css";

import handleHeader from "./Functions/HandleHeader";

export default function SettingsHeader() {
	const {
		isSettings,
		setIsSettings,
		isEditProfile,
		handleEditProfile,
		isPersonalInfo,
		isProfileInfo,
		setIsProfileInfo,
		setIsPersonalInfo,
		setBackToSettings,
	} = handleHeader();

	/**
	 * Display the SettingsHeader component according to the location of the app.
	 * <p>
	 * useLocation is a React Hook that returns the location object that represents the current URL.
	 * <p>
	 * When used inside useEffect, it is possible to conditionally check whether the key "pathname" corresponds to a certain location. If the app is on the URL whose pathname correspond to "/settings/personal-info" setIsSettings and setIsPersonalInfo states change to true, while setIsProfileInfo change to false; if it corresponds to "/settings/profile-info" setIsSettings state is still true and so is setIsProfileInfo, while setIsPersonalInfo state changes to false; if it corresponds to "/settings" both setBackToSettings and setIsSettings states change to false.
	 *
	 * @author Alessandra Pettinato
	 */

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == "/settings/personal-info") {
			setIsSettings(true);
			setIsPersonalInfo(true);
			setIsProfileInfo(false);
		} else if (location.pathname == "/settings/profile-info") {
			setIsSettings(true);
			setIsPersonalInfo(false);
			setIsProfileInfo(true);
		} else if (location.pathname == "/settings") {
			setBackToSettings(false);
			setIsSettings(false);
		}
	}, [location.pathname]);

	return (
		<>
			{!isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool style={{ gap: "0.5rem" }}>
						{!isSettings ? (
							<>
								<Link to="/profile" onClick={handleEditProfile}>
									<ArrowBackIosOutlinedIcon className="back-to" />
								</Link>
								<p className="menu-item">Account</p>
							</>
						) : (
							<>
								{isPersonalInfo && !isProfileInfo ? (
									<PersonalHeader />
								) : (
									<ProfileHeader />
								)}
							</>
						)}
					</Tool>
				</NavBar>
			) : (
				""
			)}
		</>
	);
}
