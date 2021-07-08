import React, { useState, useEffect } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";
import InputPassword from "../../../UserForm/controls/InputPassword";

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
		setFields((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleEdited = () => {
		const editedArray = user.map((updated) => {
			if (updated.beekeeper_id === fields.id) {
				return fields;
			} else {
				return editedArray;
			}
		});
		setUser(editedArray);
	};

	const handleClick = () => {
		handleEdited({ ...fields });
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
										id="formOldPassword"
										name="oldPassword"
										value={fields.oldPassword}
										onChange={handleChange}
									/>
									<p className="edit-caption">New password</p>
									<InputPassword
										id="formNewPassword"
										name="password"
										value={fields.password}
										onChange={handleChange}
									/>
									<p className="edit-caption">Confirm new password</p>
									<InputPassword
										id="formConfirmPassword"
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
