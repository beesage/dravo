import React, { useState } from "react";
import { FaMedal } from "react-icons/fa";
import { Icons } from "./Icons";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./UserProfile-Header.css";

import UserProfileHex from "./UserProfileHex";

export default function UserProfile({ user, loading }) {
	return (
		<div className="user-container">
			<div className="user-profile">
				{user.length > 0 ? (
					<>
						<>
							<FaMedal className="medal" />
						</>
						<div className="user-info">
							<>
								<img className="profile-pic" src={user[0].profilepic} />
								<p className="username">{user[0].beekeeper}</p>
								<p className="user-location">{user[0].location}</p>
							</>
						</div>
					</>
				) : (
					loading
				)}
			</div>

			{user.length > 0 ? (
				<>
					<div className="all-us-hex">
						{Icons.map((icons, index) => (
							<UserProfileHex icons={icons} key={index} />
						))}
					</div>
					<div className="us-b-hex-position"></div>
				</>
			) : (
				loading
			)}
		</div>
	);
}
