import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStyles from "../../../UserForm/styles/StyleUserForm";
import useStylesTablet from "../styles/TabletStyle";

export default function Email() {
	const classes = useStyles();
	const classesTablet = useStylesTablet();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updateEmail, err, res } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<>
					<div className="u-edit-container-mobile">
						<Container
							component="main"
							maxWidth={false}
							className={classes.container}
						>
							<p className="edit-caption">Email</p>
							<form className={classes.root}>
								<Input
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
						<form className={classesTablet.root}>
							<p className="edit-caption">Email</p>
							<Input
								name="email"
								type="text"
								id="formEmail"
								onChange={handleChange}
								value={edited.email}
								className={classesTablet.textField}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								onClick={updateEmail}
								className={classesTablet.buttonTablet}
							>
								Update
							</Button>
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
