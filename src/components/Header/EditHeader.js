import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";

import handleHeader from "./Functions/HandleHeader";

export default function EditHeader({ isEditProfile, setIsEditProfile }) {
	return (
		<>
			{isEditProfile ? (
				<NavBar position="static" className="tablet-navbar">
					<Tool>
						<Link
							to="/profile"
							onClick={() => handleHeader(setIsEditProfile(!isEditProfile))}
						>
							<p className="menu-item">Back to Profile</p>
						</Link>
					</Tool>
				</NavBar>
			) : null}
		</>
	);
}
