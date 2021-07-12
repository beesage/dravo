import React, { useContext } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";
import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

export default function Apiaries() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { apiaries, handleChangeParse, handleClick } = UpdateInfo();

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
								<p className="edit-caption">Apiaries</p>
								<InputField
									name="apiaries"
									type="number"
									id="formApiaries"
									onChange={handleChangeParse}
									value={apiaries}
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
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
