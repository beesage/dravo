import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { FaMedal } from "react-icons/fa";
import { Icons } from "./Icons";

import "./UserProfile.css";

import Hex from "./Hex";
import HexData from "./HexData";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "auto",
		borderRadius: "50%",
		border: "9px solid #314e52",
		alignSelf: "center",
		marginTop: "1rem",
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
}));

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
