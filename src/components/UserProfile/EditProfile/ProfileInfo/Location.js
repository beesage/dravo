import React, { useContext } from "react";

import UpdateInfo from "../Functions/UpdateInfo";
import APIContext from "../../../../Context/APIContext";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Location() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { city, country, handleChange, handleClick } = UpdateInfo();

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
								<p className="edit-caption">City</p>
								<InputField
									name="city"
									type="text"
									id="formCity"
									value={city}
									onChange={handleChange}
								/>
								<p className="edit-caption">Country</p>
								<InputField
									name="country"
									type="text"
									id="formCountry"
									value={country}
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
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
