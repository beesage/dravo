import React from "react";

import Avatar from "@material-ui/core/Avatar";
import { FaMedal } from "react-icons/fa";
import useStyles from "./styles/StylesUserProfile";
import { Icons } from "./styles/Icons";

import "./styles/UserProfile.css";

import Hex from "./Hex";
import HexData from "./HexData";

export default function UserProfile({ user }) {
	const classes = useStyles();

	return (
		<div className="user-container">
			{user.length > 0 ? (
				<>
					<div className="user-profile">
						<FaMedal className="medal" />
						<div className="user-info">
							<div className="hex-profile">
								<Avatar
									classes={{ root: classes.root }}
									alt=""
									src={user[0].profilepic}
								/>
							</div>
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
				false
			)}
		</div>
	);
}
