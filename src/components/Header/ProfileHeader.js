import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import handleHeader from "./Functions/HandleHeader";

export default function PersonalHeader({ isSettings, setIsSettings }) {
	const [backToSettings, setBackToSettings] = useState(false);

	let location = useLocation();

	useEffect(() => {
		if (
			location.pathname == "/settings/profile-info" &&
			backToSettings == false
		) {
			setBackToSettings(true);
		} else if (
			location.pathname == "/settings/profile-info/profile-pic" ||
			location.pathname == "/settings/profile-info/location" ||
			location.pathname == "/settings/profile-info/bio" ||
			location.pathname == "/settings/profile-info/experience" ||
			location.pathname == "/settings/profile-info/apiaries" ||
			location.pathname == "/settings/profile-info/beehives"
		) {
			setBackToSettings(false);
		}
	});

	console.log(handleHeader);

	return (
		<>
			<NavBar position="static" className="tablet-navbar">
				<Tool style={{ gap: "0.5rem" }}>
					{!backToSettings ? (
						<>
							<Link
								to="/settings/profile-info"
								onClick={() => handleHeader(setBackToSettings(false))}
							>
								<ArrowBackIosOutlinedIcon className="back-to" />
							</Link>
							<p className="menu-item">Profile Info</p>
						</>
					) : (
						<>
							<Link
								to="/settings"
								onClick={() => handleHeader(setIsSettings(!isSettings))}
							>
								<ArrowBackIosOutlinedIcon className="back-to" />
							</Link>
							<p className="menu-item">Profile Info</p>
						</>
					)}
				</Tool>
			</NavBar>
		</>
	);
}
