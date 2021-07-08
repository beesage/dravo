import React, { useState } from "react";
import $ from "jquery";

import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function ProfilePic() {
	const [update, setUpdate] = useState(false);

	const handlePicture = (e) => {
		let pic = e.target.files[0];
		let src = URL.createObjectURL(pic);
		setUpdate({
			pic,
			src,
		});
	};

	const preview = () => {
		if (update.src) {
			return <img src={update.src} />;
		}
	};

	// const upload = () => {
	// 	var formData = new FormData();

	// 	formData.append("file", update.src);

	// 	$.ajax({
	// 		url: "/202.61.225.240:3000/beewhoyouwant/user",
	// 		method: "POST",
	// 		data: formData,
	// 		cache: false,
	// 		contentType: false,
	// 		processData: false,
	// 		success: function (response) {
	// 			// Code to handle a succesful upload
	// 		},
	// 	});
	// };

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
