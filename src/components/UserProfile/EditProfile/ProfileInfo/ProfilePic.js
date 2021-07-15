import React from "react";

import UpdateInfo from "../Functions/UpdateInfo";

import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function ProfilePic() {
	const classesEdit = useStylesEdit();
	const { handlePicture, preview, updateProfilePic, err, res } = UpdateInfo();

	return (
		<div className="u-edit-container-mobile">
			<p className="edit-caption">Upload your pic</p>
			<input
				type="file"
				text="Submit"
				onChange={handlePicture}
				className="submit-pic"
			/>
			<div className="preview">{preview()}</div>
			{err && <p className="err-message">{err.validationErrors[0].message}</p>}
			<Button
				onClick={updateProfilePic}
				text="Upload"
				className={classesEdit.buttonEdit}
			>
				Upload
			</Button>
			{res && <p className="err-message">{res}</p>}
		</div>
	);
}
