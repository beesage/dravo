import React, { useState, useContext } from "react";
import APIContext from "../../../../Context/APIContext";
import axios from "axios";
import $ from "jquery";

export default function UpdateInfo() {
	const { user, setUser } = useContext(APIContext);
	const [edited, setEdited] = useState({
		username: user[0].username,
		email: user[0].email,
		apiaries: user[0].apiaries,
		beehives: user[0].beehives,
		experience: user[0].experience,
		password: user[0].password,
		id: user[0].beekeeper_id,
		bio: "",
	});

	const handleChange = (e) => {
		setEdited({
			...user[0],
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeParse = (e) => {
		setEdited({
			...user[0],
			[e.target.name]: +e.target.value,
		});
	};

	const [locationC, setLocationC] = useState({
		locationC: "",
	});

	const selectCountry = (val) => {
		setLocationC({
			locationC: val,
		});
	};

	const [locationR, setLocationR] = useState({
		locationR: "",
	});

	const selectRegion = (val) => {
		setLocationR({ region: val });
	};

	const updateLocation = () => {
		axios
			.put("http://localhost:3000/update/1", {
				country: locationC.locationC,
				region: locationR.locationR,
			})
			.then((res) => console.log(res));
	};

	const handleClick = () => {
		const editedArray = user.map((updated) => {
			if (updated.beekeeper_id === edited.beekeeper_id) {
				return edited;
			} else {
				return updated;
			}
		});
		setUser(editedArray);
	};

	const updateUsername = () => {
		axios
			.put("http://localhost:3000/update/1", {
				username: edited.username,
			})
			.then((res) => {
				console.log(res);
			});
	};

	const updateEmail = () => {
		axios
			.put("http://localhost:3000/update/1", {
				email: edited.email,
			})
			.then((res) => {
				console.log(res);
			});
	};

	const updateApiaries = () => {
		axios
			.put("http://localhost:3000/update/1", {
				apiaries: edited.apiaries,
			})
			.then((res) => {
				console.log(res);
			});
	};

	const updateBeehives = () => {
		axios
			.put("http://localhost:3000/update/1", {
				behives: edited.beehives,
			})
			.then((res) => {
				console.log(res);
			});
	};

	const updateExperience = () => {
		axios
			.put("http://localhost:3000/update/1", {
				experience: edited.experience,
			})
			.then((res) => {
				console.log(res);
			});
	};

	const updateBio = () => {
		axios
			.put("http://localhost:3000/update/1", {
				bio: edited.bio,
			})
			.then((res) => {
				console.log(res);
			});
	};

	const [updatePic, setUpdatePic] = useState(false);

	const handlePicture = (e) => {
		let pic = e.target.files[0];
		let src = URL.createObjectURL(pic);
		setUpdatePic({
			pic,
			src,
		});
	};

	const preview = () => {
		if (updatePic.src) {
			return <img src={updatePic.src} />;
		}
	};

	const updateProfilePic = () => {
		var formData = new FormData();
		formData.append("file", updatePic.src);
		axios
			.out("http://localhost:3000/update/1", {
				profile_pic: updatePic,
			})
			.then((res) => {
				console.log(res);
			});
	};

	// const updateCountryRegion = () => {
	// 	const newLocationArray = user.map((updated) => {
	// 		if (updated.country === edited.country) {
	// 			return edited;
	// 		} else {
	// 			console.log(updated);
	// 			return updated;
	// 		}
	// 	});
	// 	setUser(newLocationArray);
	// };

	// const upload = () => {
	// 	var formData = new FormData();

	// 	formData.append("file", updatePic.src);

	// 	$.ajax({
	// 		url: "/http://localhost:3000/update/1",
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

	// const [country, setCountry] = useState({
	// 	country: "",
	// 	id: user[0].beekeeper_id,
	// });

	// const [region, setRegion] = useState({
	// 	region: "",
	// 	id: user[0].beekeeper_id,
	// });

	return {
		edited,
		locationC,
		locationR,
		setEdited,
		handleChange,
		handleChangeParse,
		handleClick,
		handlePicture,
		preview,
		selectCountry,
		selectRegion,
		updateUsername,
		updateEmail,
		updateApiaries,
		updateBeehives,
		updateExperience,
		updateProfilePic,
		updateBio,
		updateLocation,
	};
}
