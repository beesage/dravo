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
		if (location.pathname == "/username") {
			setIsUsername(true);
			setIsEmail(false);
			setIsPassword(false);
		} else if (location.pathname == "/email") {
			setIsUsername(false);
			setIsEmail(true);
			setIsPassword(false);
		} else if (location.pathname == "/password") {
			setIsUsername(false);
			setIsEmail(false);
			setIsPassword(true);
		}
	}, [location.pathname]);

	return (
		<div>
			<NavBar position="static" className="tablet-navbar">
				<Tool style={{ gap: "0.5rem" }}>
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
					<p className="menu-item">Personal Info</p>
				</Tool>
			</NavBar>
		</div>
	);
}
