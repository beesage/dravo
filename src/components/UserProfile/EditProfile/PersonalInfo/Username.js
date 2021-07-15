import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Username() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updateUsername, err, res } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<div className="u-edit-container-mobile">
					<Container
						component="main"
						maxWidth={false}
						className={classesEdit.container}
					>
						<form className={classesEdit.root}>
							<p className="edit-caption">Username</p>
							<Input
								name="username"
								type="text"
								id="formUsername"
								onChange={handleChange}
								value={edited.username}
								className={classesEdit.textField}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								onClick={updateUsername}
								className={classesEdit.buttonEdit}
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
			{user.length > 0 ? (
				<div className="u-edit-container-tablet">
					<Container
						component="main"
						maxWidth={false}
						className={classesEdit.containerTablet}
					>
						<form className={classesEdit.root}>
							<p className="edit-caption">Username</p>
							<Input
								name="username"
								type="text"
								id="formUsername"
								onChange={handleChange}
								value={edited.username}
								className={classesEdit.textField}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								variant="text"
								onClick={updateUsername}
								className={classesEdit.buttonEdit}
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
