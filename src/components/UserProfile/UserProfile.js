import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import APIContext from "../../Context/APIContext";

import Pic from "./styles/StylesUserProfile";
import Hex from "./styles/Hexagons/Hex";
import HexData from "./styles/Hexagons/HexData";
import HexBio from "./styles/Hexagons/HexBio";
import HexEdit from "./styles/Hexagons/HexEdit";

import "./styles/UserProfile.css";
import "./styles/Hexagons/HexStyles.css";
import { Icons } from "./styles/Icons";
import { FaMedal } from "react-icons/fa";

export default function UserProfile() {
	const { user } = useContext(APIContext);
	return (
		<div className="user-container">
			{user.length > 0 ? (
				<>
					<div className="user-profile">
						<FaMedal className="medal" />
						<div className="user-info">
							<div className="hex-profile ribbon-outset border">
								<Pic alt="" src={user[0].profile_picture} />
							</div>
							<p className="username">{user[0].username}</p>
							<p className="user-location">{user[0].region}</p>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gridRow: "1",
							gridColumn: "3/5",
							justifySelf: "center",
							marginBottom: "1rem",
						}}
					>
						<p className="greeting-tablet">Welcome, {user[0].username}!</p>
					</div>
					<div className="bio-container">
						<HexBio user={user} />
					</div>
					<NavLink
						to="/settings"
						style={{ gridColumn: "2/3", gridRow: "3", textDecoration: "none" }}
					>
						<HexEdit />
					</NavLink>
					<div className="all-us-hex">
						{Icons.map((icons, index) => (
							<Hex icons={icons} key={index} />
						))}
					</div>
					<div className="all-us-b-hex">
						{Icons.map((icons, index) => (
							<HexData key={index} user={user} />
						))}
					</div>
				</>
			) : (
				false
			)}
		</div>
	);
}
