import React, { useContext } from "react";

import { Link } from "react-router-dom";

import APIContext from "../../../../Context/APIContext";

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
		</>
	);
}
