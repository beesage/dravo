import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";

import { Container } from "@material-ui/core";
import useStyles from "../../../UserForm/styles/StyleUserForm";
import TextBio from "../styles/TextBio";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Bio() {
	const classes = useStyles();
	const { user } = useContext(APIContext);

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
									name="bio"
									type="text"
									id="formBio"
									variant="outlined"
								/>
								<Button
									value="Update"
									text="Update"
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
