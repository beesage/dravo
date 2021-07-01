import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./styles/StylesNavBar";
import Tool from "./styles/StylesTool";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

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
							<ArrowBackIosOutlinedIcon
								style={{
									color: "#314e52",
									top: "1.3rem",
									position: "absolute",
									left: "0px",
								}}
							/>
						</Link>
						<p className="menu-item">Account</p>
					</Tool>
				</NavBar>
			) : null}
		</>
	);
}
