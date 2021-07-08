import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import PersonalHeader from "./PersonalHeader";
import ProfileHeader from "./ProfileHeader";

import "./styles/Header.css";

import handleHeader from "./Functions/HandleHeader";

export default function SettingsHeader({ isEditProfile, setIsEditProfile }) {
	const [isSettings, setIsSettings] = useState(false);

	const [isPersonalInfo, setIsPersonalInfo] = useState(false);

	const [isProfileInfo, setIsProfileInfo] = useState(false);

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
		}
	}, [location.pathname]);

	return (
		<>
			{isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool style={{ gap: "0.5rem" }}>
						{!isSettings ? (
							<>
								<Link
									to="/profile"
									onClick={() => handleHeader(setIsEditProfile(!isEditProfile))}
								>
									<ArrowBackIosOutlinedIcon
										style={{
											color: "#314e52",
											top: "1.3rem",
											position: "absolute",
											left: "1px",
										}}
									/>
								</Link>
								<p className="menu-item">Account</p>
							</>
						) : (
							<>
								{isPersonalInfo && !isProfileInfo ? (
									<PersonalHeader
										isSettings={isSettings}
										setIsSettings={setIsSettings}
									/>
								) : (
									<ProfileHeader
										isSettings={isSettings}
										setIsSettings={setIsSettings}
									/>
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
