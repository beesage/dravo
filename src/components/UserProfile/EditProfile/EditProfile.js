import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { IoIosArrowForward } from "react-icons/io";

export default function EditProfile() {
	return (
		<>
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
						<ListItem>
							<ListItemText>
								<p style={{ fontSize: "1.1rem", fontFamily: "Krub" }}>
									Personal Information
								</p>
							</ListItemText>
							<IoIosArrowForward className="go-to" />
						</ListItem>
					</Link>
					<Divider />
					<Link to="/settings/profile-info">
						<ListItem>
							<ListItemText>
								<p style={{ fontSize: "1.1rem", fontFamily: "Krub" }}>
									Profile Information
								</p>
							</ListItemText>
							<IoIosArrowForward className="go-to" />
						</ListItem>
					</Link>
					<Divider />
				</List>
			</div>
			<div className="tablet-editprofile">
				<div className="row">
					<div className="column left">
						<List>
							<Link to="/settings/personal-info">
								<ListItem>
									<ListItemText>
										<p className="menu-item-tablet">Personal Information</p>
									</ListItemText>
								</ListItem>
							</Link>
							<Divider />
							<ListItem>
								<ListItemText>
									<p className="menu-item-tablet">Password</p>
								</ListItemText>
							</ListItem>
							<Divider />
							<Link to="/settings/profile-info">
								<ListItem>
									<ListItemText>
										<p className="menu-item-tablet">Profile Information</p>
									</ListItemText>
								</ListItem>
							</Link>
							<Divider />
						</List>
					</div>
					<div className="column right">
						<h2></h2>
						<p></p>
					</div>
				</div>
			</div>
		</>
	);
}
