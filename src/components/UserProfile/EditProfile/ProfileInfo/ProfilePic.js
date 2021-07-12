import React from "react";

import UpdateInfo from "../Functions/UpdateInfo";

import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function ProfilePic() {
	const { handlePicture, preview } = UpdateInfo();

	return (
		<div className="picture-container">
			<p className="edit-caption">Upload your picture</p>
			<input
				type="file"
				text="Submit"
				onChange={handlePicture}
				className="submit-pic"
			/>
			<div className="preview">{preview()}</div>
			<Button text="Upload"></Button>
		</div>
	);
}
