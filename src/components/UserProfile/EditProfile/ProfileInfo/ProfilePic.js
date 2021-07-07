import React, { useState } from "react";
import $ from "jquery";

import Button from "../../../UserForm/controls/Submit";

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
		} else {
			<p>No preview</p>;
		}
	};

	// upload() {
	// 	var formData = new FormData();

	// 	formData.append("file", this.state.picture);

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
	// }

	return (
		<div>
			<p className="edit-caption">Upload your picture</p>

			<input type="file" text="Submit" onChange={handlePicture} />
			<br />
			<div>{preview()}</div>
			<hr />
			{/* <button onClick={this.upload.bind(this)}>Upload</button> */}
		</div>
	);
}
