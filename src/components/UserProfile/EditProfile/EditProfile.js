import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import { Link } from "react-router-dom";

export default function EditProfile() {
	return (
		<>
			<List
				component="nav"
				aria-label="mailbox folders"
				style={{
					gridArea: "2 / 10 / 4 / 1",
					display: "flex",
					alignContent: "flex-start",
					flexDirection: "column",
				}}
			>
				<Link to="/personal-info">
					<ListItem button>
						<ListItemText primary="Personal Information" />
						<ArrowForwardIosOutlinedIcon />
					</ListItem>
				</Link>
				<Divider />
				<ListItem button>
					<ListItemText primary="Profile Information" />
					<ArrowForwardIosOutlinedIcon />
				</ListItem>
				<Divider />
			</List>
		</>
	);
}
