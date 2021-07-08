import React, { useState, useEffect } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Password({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const [fields, setFields] = useState({
		oldPassword: "",
		password: "",
		confirmPassword: "",
		id: user[0].beekeeper_id,
	});

	const handleChange = (e) => {
		setFields({
			...user[0],
			[e.target.name]: e.target.value,
			id: user[0].beekeeper_id,
		});
	};

	const handleClick = () => {
		const editedArray = user.map((updated) => {
			if (
				// fields.oldPassword.length > 0 &&
				// fields.password.length > 0 &&
				// fields.confirmPassword.length > 0 &&
				// fields.password === fields.confirmPassword &&
				updated.beekeeper_id === fields.id
			) {
				return fields;
			} else {
				return editedArray;
			}
		});
		setUser(editedArray);
		console.log(editedArray);
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
									<p className="edit-caption">Old password</p>
									<InputField
										// type="password"
										id="formUsername"
										name="oldPassword"
										value={fields.oldPassword}
										onChange={handleChange}
									/>
									<p className="edit-caption">New password</p>
									<InputField
										// type="password"
										id="formUsername"
										name="password"
										value={fields.password}
										onChange={handleChange}
									/>
									<p className="edit-caption">Confirm new password</p>
									<InputField
										// type="password"
										id="formUsername"
										name="confirmPassword"
										value={fields.confirmPassword}
										onChange={handleChange}
									/>
									<Button
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
