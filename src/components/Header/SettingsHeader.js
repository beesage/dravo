import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import handleHeader from "./Functions/HandleHeader";

export default function SettingsHeader({ isEditProfile, setIsEditProfile }) {
	const [isPersonalInfo, setIsPersonalInfo] = useState(false);

	const [isSettings, setIsSettings] = useState(false);
	// const [isProfileInfo, setIsProfileInfo] = useState(false);

	// let location = useLocation();

	// useEffect(() => {
	// 	if (
	// 		location.pathname == "/personal-info" ||
	// 		location.pathname == "/profile-info"
	// 	) {
	// 		setIsSettings(false);
	// 		setIsPersonalInfo(!isPersonalInfo);
	// 		setIsProfileInfo(!isProfileInfo);
	// 	}
	// }, []);

	return (
		<>
			{isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool style={{ gap: "0.5rem" }}>
						{isPersonalInfo ? (
							<Link
								to="/profile"
								onClick={() => handleHeader(setIsEditProfile(!isEditProfile))}
							>
								<ArrowBackIosOutlinedIcon
									style={{
										color: "#314e52",
										top: "1.3rem",
										position: "absolute",
										left: "0px",
									}}
								/>
							</Link>
						) : (
							<Link
								to="/settings"
								onClick={() => handleHeader(setIsPersonalInfo(!isPersonalInfo))}
							>
								<ArrowBackIosOutlinedIcon
									style={{
										color: "#314e52",
										top: "1.3rem",
										position: "absolute",
										left: "0px",
									}}
								/>
							</Link>
						)}
						{isPersonalInfo ? (
							<p className="menu-item">Account</p>
						) : (
							<p className="menu-item">Personal Info</p>
						)}
					</Tool>
				</NavBar>
			) : null}
		</>
	);
}
