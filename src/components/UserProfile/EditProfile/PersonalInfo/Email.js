import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Email({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const [edited, setEdited] = useState({
		email: user[0].email,
	});

	const handleEdited = (editedEmail) => {
		const editedArray = user.map((edited) => {
			if (edited.beekeeper_id === editedEmail.beekeeper_id) {
				return editedEmail;
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
										name="email"
										type="text"
										id="formUsername"
										onChange={handleChange}
										value={edited.email}
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
						""
					)}
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
