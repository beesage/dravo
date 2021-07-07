import React, { useState } from "react";
import { useHistory } from "react-router";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Password({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const history = useHistory();
	const [fields, handleFieldChange] = useState({
		password: "",
		oldPassword: "",
		confirmPassword: "",
	});

	const [isChanging, setIsChanging] = useState(false);

	function validateForm() {
		return (
			fields.oldPassword.length > 0 &&
			fields.password.length > 0 &&
			fields.password === fields.confirmPassword
		);
	}

	async function handleChangeClick(event) {
		event.preventDefault();

		setIsChanging(true);

		try {
			const currentUser = await Auth.currentAuthenticatedUser();
			await Auth.changePassword(
				currentUser,
				fields.oldPassword,
				fields.password
			);

			history.push("/settings/personal-info/password");
		} catch (error) {
			onError(error);
			setIsChanging(false);
		}
	}

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
								<form className={classes.root} onSubmit={handleChangeClick}>
									<p className="edit-caption">Old password</p>
									<InputField
										type="password"
										id="formUsername"
										onChange={handleFieldChange}
										value={fields.oldPassword}
									/>
									<p className="edit-caption">New password</p>
									<InputField
										type="password"
										id="formUsername"
										onChange={handleFieldChange}
										value={fields.password}
									/>
									<p className="edit-caption">Confirm new password</p>
									<InputField
										type="password"
										id="formUsername"
										onChange={handleFieldChange}
										value={fields.confirmPassword}
									/>
									<Button
										value="Submit"
										text="Submit"
										style={{ fontSize: "1em" }}
										disabled={!validateForm()}
										isLoading={isChanging}
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
