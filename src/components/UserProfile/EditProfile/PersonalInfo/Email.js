import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Email() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updateEmail, err } = UpdateInfo();

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
							<p className="edit-caption">Email</p>
							<form className={classes.root}>
								<InputField
									name="email"
									type="text"
									id="formEmail"
									onChange={handleChange}
									value={edited.email}
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
									onClick={updateEmail}
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
