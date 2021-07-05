import React from "react";

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
						<ListItemText>
							<p style={{ fontSize: "1.1rem", fontFamily: "Krub" }}>
								Personal Information
							</p>
						</ListItemText>
						<ArrowForwardIosOutlinedIcon
							style={{
								fontSize: "1.1rem",
							}}
						/>
					</ListItem>
				</Link>
				<Divider />
				<Link to="/profile-info">
					<ListItem button>
						<ListItemText>
							<p style={{ fontSize: "1.1rem", fontFamily: "Krub" }}>
								Profile Information
							</p>
						</ListItemText>
						<ArrowForwardIosOutlinedIcon
							style={{
								fontSize: "1.1rem",
							}}
						/>
					</ListItem>
				</Link>
				<Divider />
			</List>
		</>
	);
}
