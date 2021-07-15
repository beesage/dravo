import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Experience() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { edited, handleChangeParse, updateExperience, err, res } =
		UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<>
					<div className="u-edit-container-mobile">
						<Container
							component="main"
							maxWidth={false}
							className={classesEdit.root}
						>
							<form className={classesEdit.root}>
								<p className="edit-caption">Experience</p>
								<Input
									name="experience"
									type="number"
									id="formExperience"
									onChange={handleChangeParse}
									value={edited.experience}
									className={classesEdit.textField}
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
									className={classesEdit.buttonEdit}
								>
									Update
								</Button>
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
						className={classesEdit.containerTablet}
					>
						<form className={classesEdit.root}>
							<p className="edit-caption">Experience</p>
							<Input
								name="experience"
								type="number"
								id="formExperience"
								onChange={handleChangeParse}
								value={edited.experience}
								className={classesEdit.textField}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								style={{ fontSize: "1em" }}
								onClick={updateExperience}
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
