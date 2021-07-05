import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Header from "./Header";

import handleHeader from "./Functions/HandleHeader";

export default function SettingsHeader({ isEditProfile, setIsEditProfile }) {
	const [isPersonalInfo, setIsPersonalInfo] = useState(true);

	const [isProfileInfo, setIsProfileInfo] = useState(false);

	let location = useLocation();

	useEffect(() => {
		if (
			location.pathname == "/personal-info" ||
			location.pathname == "/profile-info"
		) {
			setIsPersonalInfo(!isPersonalInfo);
			setIsProfileInfo(!isProfileInfo);
		}
	}, [location.pathname]);

	return (
		<>
			{isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool style={{ gap: "0.5rem" }}>
						{isPersonalInfo ? (
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
											left: "0px",
										}}
									/>
								</Link>
								<p className="menu-item">Account</p>
							</>
						) : (
							<>
								<Link
									to="/settings"
									onClick={() =>
										handleHeader(setIsPersonalInfo(!isPersonalInfo))
									}
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
								<p className="menu-item">Personal Info</p>
							</>
						)}
						{/* {isPersonalInfo ? (
							<p className="menu-item">Account</p>
						) : (
							<p className="menu-item">Personal Info</p>
						)} */}
					</Tool>
				</NavBar>
			) : (
				<Header />
			)}
		</>
	);
}
