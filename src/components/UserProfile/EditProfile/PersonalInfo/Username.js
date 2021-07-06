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

	const [edited, setEdited] = useState({
		username: user[0].username,
	});

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

	const handleChange = (e) => {
		setEdited((prevState) => {
			return { ...prevState, [e.target.name]: [e.target.value] };
		});
	};

	const handleClick = () => {
		handleEdited({ ...edited, beekeeper_id });
	};

	return (
		<>
			{user.length > 0 ? (
				<>
					{!isEditMode ? (
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
										id="formUsername"
										onChange={handleChange}
										value={edited.username}
									/>
									<Button
										type="submit"
										value="Update"
										text="Update"
										style={{ fontSize: "1em" }}
										onClick={handleClick}
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
