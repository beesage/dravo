import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Username() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updateUsername, err, res } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<div className="u-edit-container">
					<Container
						component="main"
						maxWidth={false}
						className={classes.container}
					>
						<form className={classes.root}>
							<p className="edit-caption">Username</p>
							<InputField
								name="username"
								type="text"
								id="formUsername"
								onChange={handleChange}
								value={edited.username}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								style={{ fontSize: "1em" }}
								onClick={updateUsername}
								style={{ width: "100%" }}
							/>
							{res && <p className="err-message">{res}</p>}
						</form>
					</Container>
				</div>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
