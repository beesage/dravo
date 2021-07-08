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
			location.pathname == "/settings/personal-info/username" ||
			location.pathname == "/settings/personal-info/email" ||
			location.pathname == "/settings/personal-info/password"
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
								to="/settings/personal-info"
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
							<p className="menu-item">Personal Info</p>
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
							<p className="menu-item">Personal Info</p>
						</>
					)}
				</Tool>
			</NavBar>
		</>
	);
}
