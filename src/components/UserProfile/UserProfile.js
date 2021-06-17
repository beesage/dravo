import React from "react";
import { FaMedal } from "react-icons/fa";
import { Icons } from "./Icons";

import "../UserProfile-Header.css";

import Hex from "./Hex";
import HexData from "./HexData";

export default function UserProfile({ user, loading }) {
	return (
		<div className="user-container">
			{user.length > 0 ? (
				<>
					<div className="user-profile">
						<FaMedal className="medal" />
						<div className="user-info">
							<img className="profile-pic" src={user[0].profilepic} />
							<p className="username">{user[0].beekeeper}</p>
							<p className="user-location">{user[0].location}</p>
						</div>
					</div>
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
				loading
			)}
		</div>
	);
}
