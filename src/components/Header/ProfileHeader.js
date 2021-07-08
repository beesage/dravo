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
			location.pathname == "/settings/personal-info" &&
			backToSettings == false
		) {
			setBackToSettings(true);
		} else if (
			location.pathname == "/settings/personal-info/profile-pic" ||
			location.pathname == "/settings/personal-info/location" ||
			location.pathname == "/settings/personal-info/bio" ||
			location.pathname == "/settings/personal-info/experience" ||
			location.pathname == "/settings/personal-info/apiaries" ||
			location.pathname == "/settings/personal-info/beehives"
		) {
			setBackToSettings(false);
		}
	});

	return (
		<>
			<NavBar position="static" className="tablet-navbar">
				<Tool style={{ gap: "0.5rem" }}>
					{!backToSettings ? (
						<>
							<Link
								to="/settings/profile-info"
								onClick={() => handleHeader(setBackToSettings(!backToSettings))}
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
							<p className="menu-item">Profile Info</p>
						</>
					) : (
						<>
							<Link
								to="/settings"
								onClick={() => handleHeader(setIsSettings(!isSettings))}
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
							<p className="menu-item">Profile Info</p>
						</>
					)}
				</Tool>
			</NavBar>
		</>
	);
}
