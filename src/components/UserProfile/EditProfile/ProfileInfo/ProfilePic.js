import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function ProfilePic() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { handlePicture, preview, updateProfilePic, err, res } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<div className="u-edit-container-mobile">
					<Container
						component="main"
						maxWidth={false}
						className={classesEdit.root}
					>
						<p className="edit-caption">Upload your pic</p>
						<input
							type="file"
							text="Submit"
							onChange={handlePicture}
							className="submit-pic"
						/>
						<div className="preview">{preview()}</div>
						{err && (
							<p className="err-message">{err.validationErrors[0].message}</p>
						)}
						<Button
							onClick={updateProfilePic}
							text="Upload"
							className={classesEdit.buttonEdit}
						>
							Upload
						</Button>
						{res && <p className="err-message">{res}</p>}
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
						className={classesEdit.containerTabletEmail}
					>
						<p className="edit-caption">Upload your pic</p>
						<input
							type="file"
							text="Submit"
							onChange={handlePicture}
							className="submit-pic"
						/>
						<div className="preview">{preview()}</div>
						{err && (
							<p className="err-message">{err.validationErrors[0].message}</p>
						)}
						<Button
							onClick={updateProfilePic}
							text="Upload"
							className={classesEdit.buttonEdit}
						>
							Upload
						</Button>
						{res && <p className="err-message">{res}</p>}
					</Container>
				</div>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
