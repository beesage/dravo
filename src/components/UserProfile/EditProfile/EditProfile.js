import React from "react";
import { Link } from "react-router-dom";

import PersonalHeader from "../../Header/PersonalHeader";
import ProfileHeader from "../../Header/ProfileHeader";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		background: "#F7F6E7",
		paddingTop: "80px",
		borderRight: "1px solid black",
	},
}));

export default function EditProfile() {
	const classes = useStyles();

	return (
		<div style={{ background: "#f7f6e7", gridColumn: "1/10" }}>
			<div className="mobile-editprofile">
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
					<Link to="/settings/personal-info">
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
					<Link to="/settings/profile-info">
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
			</div>
			<div className="tablet-editprofile">
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerContainer}>
						<Divider />
						<List>
							<Link to="/settings/personal-info">
								<ListItem>
									<PersonalHeader />
								</ListItem>
							</Link>
							<Link to="/settings/profile-info">
								<ListItem>
									<ProfileHeader />
								</ListItem>
							</Link>
						</List>
					</div>
				</Drawer>
				<main className={classes.content}></main>
			</div>
		</div>
	);
}
