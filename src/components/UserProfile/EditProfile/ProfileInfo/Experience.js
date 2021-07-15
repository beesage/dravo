import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";
import useStyles from "../../../UserForm/styles/StyleUserForm";
import useStylesTablet from "../styles/TabletStyle";

export default function Experience() {
	const classes = useStyles();
	const classesTablet = useStylesTablet();
	const { user } = useContext(APIContext);
	const { edited, handleChangeParse, updateExperience, err, res } =
		UpdateInfo();

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
									value={edited.experience}
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
									onClick={updateExperience}
								/>
								{res && <p className="err-message">{res}</p>}
							</form>
						</Container>
					</div>
				</>
			) : (
				<LoadingPage />
			)}
			{user.length > 0 ? (
				<div className="u-edit-container-tablet">
					<Container
						component="main"
						maxWidth={false}
						className={classesTablet.containerTabletEmail}
					>
						<form className={classes.root}>
							<p className="edit-caption">Experience</p>
							<InputField
								name="experience"
								type="number"
								id="formExperience"
								onChange={handleChangeParse}
								value={edited.experience}
								className={classesTablet.textField}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								style={{ fontSize: "1em" }}
								onClick={updateExperience}
								className={classesTablet.button}
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
