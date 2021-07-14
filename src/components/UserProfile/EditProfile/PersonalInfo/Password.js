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
	const { edited, handleChange, updatePassword } = UpdateInfo();

	// const [fields, setFields] = useState({
	// 	oldPassword: "",
	// 	password: "",
	// 	confirmPassword: "",
	// 	id: user[0].beekeeper_id,
	// });

	// const handleChange = (e) => {
	// 	setFields((prevState) => {
	// 		return { ...prevState, [e.target.name]: e.target.value };
	// 	});
	// };

	// const handleEdited = () => {
	// 	const editedArray = user.map((updated) => {
	// 		if (updated.beekeeper_id === fields.beekeeper_id) {
	// 			return fields;
	// 		} else {
	// 			return editedArray;
	// 		}
	// 	});
	// 	setUser(editedArray);
	// };

	// const handleClick = () => {
	// 	handleEdited({ ...fields });
	// };
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
								<p className="edit-caption">New password</p>
								<InputPassword
									id="formNewPassword"
									name="password"
									value={edited.password}
									onChange={handleChange}
								/>
								<p className="edit-caption">Confirm new password</p>
								<InputPassword
									id="formConfirmPassword"
									name="confirmPassword"
									value={edited.confirmPassword}
									onChange={handleChange}
								/>
								<Button
									value="Update"
									text="Update"
									style={{ fontSize: "1em" }}
									onClick={updatePassword}
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
