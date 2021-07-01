import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import handleHeader from "./Functions/HandleHeader";

export default function EditHeader({ isEditProfile, setIsEditProfile }) {
	return (
		<>
			{isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool style={{ gap: "0.5rem" }}>
						<Link
							to="/profile"
							onClick={() => handleHeader(setIsEditProfile(!isEditProfile))}
						>
							<ArrowBackIcon
								style={{ color: "#314e52", verticalAlign: "bottom" }}
							/>
						</Link>
						<p className="menu-item">Settings</p>
					</Tool>
				</NavBar>
			) : null}
		</>
	);
}
