import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import handleHeader from "./Functions/HandleHeader";

export default function PersonalHeader({ isPersonalInfo }) {
	const [isUsername, setIsUsername] = useState(false);
	const [isEmail, setIsEmail] = useState(false);
	const [isPassword, setIsPassword] = useState(false);

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == "/username") {
			setIsUsername(true);
		} else if (location.pathname == "/email") {
			setIsEmail(true);
		} else if (location.pathname == "/password") {
			setIsPassword(true);
		}
	});
	return (
		<div>
			{!isPersonalInfo ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool style={{ gap: "0.5rem" }}>
						<Link
							to="/settings"
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
						<p className="menu-item">{isUsername ? "Username" : ""}</p>
					</Tool>
				</NavBar>
			) : (
				"HELP"
			)}
		</div>
	);
}
