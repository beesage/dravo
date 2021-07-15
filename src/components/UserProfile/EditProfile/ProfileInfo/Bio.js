import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Bio() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updateBio, err, res } = UpdateInfo();

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
								<p className="edit-caption">Bio</p>
								<textarea
									className="bio-textarea"
									value={edited.bio}
									onChange={handleChange}
									name="bio"
									type="text"
									id="formBio"
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<Button
									value="Update"
									text="Update"
									onClick={updateBio}
									style={{ fontSize: "1em" }}
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
						<form>
							<p className="edit-caption">Bio</p>
							<textarea
								className="bio-textarea"
								value={edited.bio}
								onChange={handleChange}
								name="bio"
								type="text"
								id="formBio"
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								onClick={updateBio}
								className={classesEdit.buttonTablet}
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
