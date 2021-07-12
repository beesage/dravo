import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import handleHeader from "./Functions/HandleHeader";

export default function PersonalHeader() {
	const {
		backToSettings,
		setBackToSettings,
		handleBackTo,
		handleIsSettings,
		setIsSettings,
	} = handleHeader();

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == "/settings/personal-info") {
			setBackToSettings(true);
		} else {
			setBackToSettings(false);
			setIsSettings(false);
		}
	});

	return (
		<>
			<NavBar position="static" className="tablet-navbar">
				<Tool style={{ gap: "0.5rem" }}>
					{backToSettings ? (
						<>
							<Link to="/settings" onClick={handleBackTo}>
								<ArrowBackIosOutlinedIcon className="back-to" />
							</Link>
							<p className="menu-item">Personal Information</p>
						</>
					) : (
						<>
							<Link to="/settings/personal-info" onClick={handleIsSettings}>
								<ArrowBackIosOutlinedIcon className="back-to" />
							</Link>
							<p className="menu-item">Personal Information</p>
						</>
					)}
				</Tool>
			</NavBar>
		</>
	);
}
