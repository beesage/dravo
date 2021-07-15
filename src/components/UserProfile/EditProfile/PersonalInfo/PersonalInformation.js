import React, { useContext } from "react";

import { Link } from "react-router-dom";

import APIContext from "../../../../Context/APIContext";

import Username from "../PersonalInfo/Username";
import Email from "../PersonalInfo/Email";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { IoIosArrowForward } from "react-icons/io";

import "../styles/EditProfile.css";

export default function PersonalInformation() {
	const { user } = useContext(APIContext);
	return (
		<>
			<div className="mobile-editprofile">
				{user.length > 0 ? (
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
						<Link to="/settings/personal-info/username">
							<ListItem button>
								<ListItemText>
									<p className="edit-caption">Username</p>
								</ListItemText>
								<ListItemText>
									<p className="api-caption">{user[0].username}</p>
								</ListItemText>
							</ListItem>
						</Link>
						<Divider />
						<Link to="/settings/personal-info/email">
							<ListItem button>
								<ListItemText>
									<p className="edit-caption">Email</p>
								</ListItemText>
								<ListItemText>
									<p className="api-caption">{user[0].email}</p>
								</ListItemText>
							</ListItem>
						</Link>
						<Divider />
						<Link to="/settings/personal-info/password">
							<ListItem button>
								<ListItemText>
									<p className="edit-caption">Password</p>
								</ListItemText>
								<ListItemText>
									<p className="api-caption" />
								</ListItemText>
								<IoIosArrowForward
									style={{
										fontSize: "1.1rem",
									}}
								/>
							</ListItem>
						</Link>
						<Divider />
					</List>
				) : null}
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
							<Link to="/settings/personal-info/password">
								<ListItem>
									<ListItemText>
										<p className="menu-item-tablet">Password</p>
									</ListItemText>
								</ListItem>
							</Link>
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
						<Username />
						<Email />
					</div>
				</div>
			</div>
		</>
	);
}
