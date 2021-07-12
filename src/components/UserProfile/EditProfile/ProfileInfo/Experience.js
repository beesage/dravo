import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Experience() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const { experience, handleChangeParse, handleClick } = UpdateInfo();

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
								<p className="edit-caption">Experience</p>
								<InputField
									name="experience"
									type="number"
									id="formExperience"
									onChange={handleChangeParse}
									value={experience}
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
