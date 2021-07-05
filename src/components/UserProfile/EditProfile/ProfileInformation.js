import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "../styles/EditProfile.css";

import { Link } from "react-router-dom";

export default function ProfileInformation({ user }) {
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
					<Link to="/profile-pic">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Profile Picture</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">{user[0].profile_picture}</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/location">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Location</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">
									{user[0].city}, {user[0].country}
								</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/bio">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Bio</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">bio here</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/experience">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Experience</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">experience here</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/apiaries">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Apiaries</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">{user[0].apiaries}</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/beehives">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Beehives</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">{user[0].beehives}</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
				</List>
			) : null}
		</>
	);
}
