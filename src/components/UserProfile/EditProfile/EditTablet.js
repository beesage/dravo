import React from "react";
import { Link } from "react-router-dom";

import PersonalHeader from "../../Header/PersonalHeader";
import ProfileHeader from "../../Header/ProfileHeader";
import Username from "./PersonalInfo/Username";
import Email from "./PersonalInfo/Email";

import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

import "./styles/EditProfile.css";
import "./styles/TabletStyle";
import useStylesTablet from "./styles/TabletStyle";

export default function EditTablet() {
	const classes = useStylesTablet();

	return (
		<>
			<div className="tablet-editprofile">
				<Toolbar>
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
									<ListItem className={classes.listItem}>
										<PersonalHeader />
									</ListItem>
								</Link>
								<Link to="/settings/personal-info/password">
									<ListItem className={classes.listItem}>
										<p className="menu-item">Password</p>
									</ListItem>
									<Divider />
								</Link>
								<Link to="/settings/profile-info">
									<ListItem className={classes.listItem}>
										<ProfileHeader />
									</ListItem>
								</Link>
							</List>
						</div>
					</Drawer>
				</Toolbar>
				<main className={classes.content}>
					<Username />

					<Email />
				</main>
			</div>
		</>
	);
}
