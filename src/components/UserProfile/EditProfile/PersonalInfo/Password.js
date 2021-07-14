import React, { useState, useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";
import InputPassword from "../../../UserForm/controls/InputPassword";

import "../styles/EditProfile.css";

export default function Password() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updatePassword, err, res } = UpdateInfo();

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
								<p className="edit-caption">Old password</p>
								<InputField
									id="formOldPassword"
									name="oldPassword"
									value={edited.oldPassword}
									onChange={handleChange}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">New password</p>
								<InputPassword
									id="formNewPassword"
									name="password"
									value={edited.password}
									onChange={handleChange}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">Confirm new password</p>
								<InputPassword
									id="formConfirmPassword"
									name="confirmPassword"
									value={edited.confirmPassword}
									onChange={handleChange}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<Button
									value="Update"
									text="Update"
									style={{ fontSize: "1em" }}
									onClick={updatePassword}
								/>
								{res && <p className="err-message">{res}</p>}
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
