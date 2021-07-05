import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "../styles/EditProfile.css";

import { Link } from "react-router-dom";

export default function PersonalInformation({ user }) {
	console.log(user);
	return (
		<>
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
					<Link to="/username">
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
					<Link to="/email">
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
					<Link to="/password">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Password</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">{user[0].password}</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
				</List>
			) : null}
		</>
	);
}
