import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";
import EditUsername from "./EditUsername";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Username({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const handleEdited = (editedUser) => {
		const editedArray = user.map((edited) => {
			if (edited.beekeeper_id === editedUser.beekeeper_id) {
				return editedUser;
			} else {
				return edited;
			}
		});
		setUser(editedArray);
	};

	return (
		<>
			{user.length > 0 ? (
				<>
					{isEditMode ? (
						<div className="u-edit-container">
							<Container
								component="main"
								maxWidth={false}
								className={classes.container}
							>
								<form className={classes.root}>
									<InputField
										name="username"
										type="text"
										value={user[0].name}
									/>
									<Button
										type="update"
										value="Update"
										text="Update"
										style={{ fontSize: "1em" }}
									/>
								</form>
							</Container>
						</div>
					) : (
						<EditUsername user={user} handleEdited={handleEdited} />
					)}
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
