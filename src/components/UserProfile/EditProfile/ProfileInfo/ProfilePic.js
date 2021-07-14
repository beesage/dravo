import React from "react";

import UpdateInfo from "../Functions/UpdateInfo";

import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function ProfilePic() {
	const { handlePicture, preview, updateProfilePic, err } = UpdateInfo();

	return (
		<div className="picture-container">
			<p className="edit-caption">Upload your pic</p>
			<input
				type="file"
				text="Submit"
				onChange={handlePicture}
				className="submit-pic"
			/>
			<div className="preview">{preview()}</div>
			{err && <p className="err-message">{err.validationErrors[0].message}</p>}
			<Button onClick={updateProfilePic} text="Upload" />
		</div>
	);
}
