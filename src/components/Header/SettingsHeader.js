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
