import React from "react";
import { Link } from "react-router-dom";

import Pic from "./styles/StylesUserProfile";
import Hex from "./Hex";
import HexData from "./HexData";
import HexBio from "./HexBio";
import HexEdit from "./HexEdit";

import "./styles/UserProfile.css";
import { Icons } from "./styles/Icons";
import { FaMedal } from "react-icons/fa";

export default function UserProfile({ user }) {
	return (
		<div className="user-container">
			{user.length > 0 ? (
				<>
					<div className="user-profile">
						<FaMedal className="medal" />
						<div className="user-info">
							<div className="hex-profile ribbon-outset border">
								<Pic alt="" src={user[0].profilepic} />
							</div>
							<p className="username">{user[0].beekeeper}</p>
							<p className="user-location">{user[0].location}</p>
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
						<p className="greeting-tablet">Welcome, {user[0].beekeeper}!</p>
					</div>
					<div className="bio-container">
						<HexBio user={user} />
					</div>
					<Link
						to="/settings"
						style={{ gridColumn: "2/3", gridRow: "3", textDecoration: "none" }}
					>
						<HexEdit />
					</Link>
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
