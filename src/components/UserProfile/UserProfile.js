import React from "react";

import Pic from "./styles/StylesUserProfile";
import Hex from "./Hex";
import HexData from "./HexData";
import HexBio from "./HexBio";

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
							<div className="hex-profile">
								<Pic alt="" src={user[0].profilepic} />
							</div>
							<p className="username">{user[0].beekeeper}</p>
							<p className="user-location">{user[0].location}</p>
						</div>
					</div>

					<HexBio user={user} />
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
