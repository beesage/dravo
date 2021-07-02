import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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
					<Link to="/personal-info">
						<ListItem button>
							<ListItemText>
								<p style={{ fontSize: "0.9rem", fontFamily: "Krub" }}>
									Username
								</p>
							</ListItemText>
							<ListItemText>
								<p style={{ fontSize: "0.9rem", fontFamily: "Krub" }}>
									{user[0].username}
								</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/profile-info">
						<ListItem button>
							<ListItemText>
								<p style={{ fontSize: "0.9em", fontFamily: "Krub" }}>Email</p>
							</ListItemText>
							<ListItemText>
								<p style={{ fontSize: "0.9em", fontFamily: "Krub" }}>
									{user[0].email}
								</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/profile-info">
						<ListItem button>
							<ListItemText>
								<p style={{ fontSize: "0.9rem", fontFamily: "Krub" }}>
									Password
								</p>
							</ListItemText>
							<ListItemText>
								<p style={{ fontSize: "0.9rem", fontFamily: "Krub" }}>
									{user[0].password}
								</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
				</List>
			) : null}
		</>
	);
}
