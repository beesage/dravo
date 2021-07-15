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

export default function Apiaries() {
	const classes = useStyles();
	const classesTablet = useStylesTablet();
	const { user } = useContext(APIContext);
	const { edited, handleChangeParse, updateApiaries, err, res } = UpdateInfo();

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
							<form className={classes.root}>
								<p className="edit-caption">Apiaries</p>
								<InputField
									name="apiaries"
									type="number"
									id="formApiaries"
									onChange={handleChangeParse}
									value={edited.apiaries}
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
									onClick={updateApiaries}
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
							<p className="edit-caption">Apiaries</p>
							<InputField
								name="apiaries"
								type="number"
								id="formApiaries"
								onChange={handleChangeParse}
								value={edited.apiaries}
								className={classesTablet.textField}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								style={{ fontSize: "1em" }}
								onClick={updateApiaries}
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
