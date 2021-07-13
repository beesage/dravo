import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";

import { Container } from "@material-ui/core";
import useStyles from "../../../UserForm/styles/StyleUserForm";
import TextBio from "../styles/TextBio";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";
import UpdateInfo from "../Functions/UpdateInfo";

export default function Bio() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updateBio } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<>
					<div className="u-edit-container">
						<Container
							component="main"
							maxWidth={false}
							className={classes.container}
						>
							<form className={classes.root}>
								<p className="edit-caption">Bio</p>
								<TextBio
									value={edited.bio}
									onChange={handleChange}
									name="bio"
									type="text"
									id="formBio"
									variant="outlined"
								/>
								<Button
									value="Update"
									text="Update"
									onClick={updateBio}
									style={{ fontSize: "1em" }}
								/>
							</form>
						</Container>
					</div>
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
