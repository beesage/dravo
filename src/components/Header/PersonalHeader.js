import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

import handleHeader from "./Functions/HandleHeader";

export default function PersonalHeader({ isSettings, setIsSettings }) {
	const [backToSettings, setBackToSettings] = useState(false);

	return (
		<div>
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
										left: "-100px",
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
										left: "-100px",
									}}
								/>
							</Link>
							<p className="menu-item">Personal Info</p>
						</>
					)}
				</Tool>
			</NavBar>
		</div>
	);
}
