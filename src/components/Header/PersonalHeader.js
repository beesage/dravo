import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import handleHeader from "./Functions/HandleHeader";

export default function PersonalHeader({ isSettings, setIsSettings }) {
	const [isUsername, setIsUsername] = useState(false);
	const [isEmail, setIsEmail] = useState(false);
	const [isPassword, setIsPassword] = useState(false);

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == "/settings/profile-info/username") {
			setIsSettings(false);
			setIsUsername(true);
			setIsEmail(false);
			setIsPassword(false);
		} else if (location.pathname == "/settings/profile-info/email") {
			setIsSettings(false);
			setIsUsername(false);
			setIsEmail(true);
			setIsPassword(false);
		} else if (location.pathname == "/settings/profile-info/password") {
			setIsSettings(false);
			setIsUsername(false);
			setIsEmail(false);
			setIsPassword(true);
		} else if (location.pathname == "/settings/profile-info") {
			setIsSettings(false);
			setIsUsername(false);
			setIsEmail(false);
			setIsPassword(false);
		}
	}, [location.pathname]);

	return (
		<div>
			<NavBar position="static" className="tablet-navbar">
				<Tool style={{ gap: "0.5rem" }}>
					{!isUsername || !isEmail || !isPassword ? (
						<>
							<Link
								to="/settings/personal-info"
								onClick={() => handleHeader(setIsSettings(!isSettings))}
							>
								<ArrowBackIosOutlinedIcon
									style={{
										color: "#314e52",
										top: "1.3rem",
										position: "absolute",
										left: "-100px",
									}}
								/>
							</Link>
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
										left: "-100px",
									}}
								/>
							</Link>
						</>
					)}
					<p className="menu-item">Personal Info</p>
				</Tool>
			</NavBar>
		</div>
	);
}
