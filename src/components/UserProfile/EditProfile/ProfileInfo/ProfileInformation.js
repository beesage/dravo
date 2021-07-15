import React, { useContext } from "react";
import { Link } from "react-router-dom";

import APIContext from "../../../../Context/APIContext";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { IoIosArrowForward } from "react-icons/io";

import "../styles/EditProfile.css";

export default function ProfileInformation() {
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
					<Link to="/settings/profile-info/profile-pic">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Profile Picture</p>
							</ListItemText>
							<IoIosArrowForward
								style={{
									fontSize: "1.1rem",
								}}
							/>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/settings/profile-info/location">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Location</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">
									{user[0].region}, {user[0].country}
								</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/settings/profile-info/bio">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Bio</p>
							</ListItemText>
							<IoIosArrowForward
								style={{
									fontSize: "1.1rem",
								}}
							/>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/settings/profile-info/experience">
						<ListItem button>
							<ListItemText>
								<p className="edit-caption">Experience</p>
							</ListItemText>
							<ListItemText>
								<p className="api-caption">{user[0].experience}</p>
							</ListItemText>
						</ListItem>
					</Link>
					<Divider />
					<Link to="/settings/profile-info/apiaries">
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
					<Link to="/settings/profile-info/beehives">
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
