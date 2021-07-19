import React, { useContext, useState } from "react";

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
	const [isTablet, setIsTablet] = useState(false);

	const handleTablet = () => {
		setIsTablet(!isTablet);
	};

	return (
		<>
			{user.length > 0 ? (
				<div
					className={
						isTablet ? "u-edit-container-mobile" : "u-edit-container-tablet"
					}
				>
					<Container
						component="main"
						maxWidth={false}
						className={
							isTablet ? classesEdit.container : classesEdit.containerTablet
						}
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

							<Button
								value="Update"
								text="Update"
								onClick={updateUsername}
								className={classesEdit.buttonEdit}
							>
								Update
							</Button>
							{res && <p className="res-message">{res}</p>}
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
						</form>
					</Container>
				</div>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
