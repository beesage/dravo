import React, { useState, useContext } from "react";
import APIContext from "../../../../Context/APIContext";
import axios from "axios";

export default function UpdateInfo() {
	const { user, setUser } = useContext(APIContext);
	const [edited, setEdited] = useState({
		username: user[0].username,
		email: user[0].email,
		apiaries: user[0].apiaries,
		beehives: user[0].beehives,
		experience: user[0].experience,
		password: "",
		oldPassword: "",
		confirmPassword: "",
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
		setLocationR({ locationR: val });
	};

	const updateLocation = () => {
		axios
			.put("http://localhost:3000/update/1", {
				country: locationC.locationC,
				region: locationR.locationR,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	// const handleClick = () => {
	// 	const editedArray = user.map((updated) => {
	// 		if (updated.beekeeper_id === edited.beekeeper_id) {
	// 			return edited;
	// 		} else {
	// 			return updated;
	// 		}
	// 	});
	// 	setUser(editedArray);
	// };

	const [err, setErr] = useState("");

	const [res, setRes] = useState("");

	const updateUsername = () => {
		axios
			.put("http://localhost:3000/update/1", {
				username: edited.username,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	const updateEmail = () => {
		axios
			.put("http://localhost:3000/update/1", {
				email: edited.email,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	const updateApiaries = () => {
		axios
			.put("http://localhost:3000/update/1", {
				apiaries: edited.apiaries,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	const updateBeehives = () => {
		axios
			.put("http://localhost:3000/update/1", {
				beehives: edited.beehives,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	const updateExperience = () => {
		axios
			.put("http://localhost:3000/update/1", {
				experience: edited.experience,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	const updateBio = () => {
		axios
			.put("http://localhost:3000/update/1", {
				bio: edited.bio,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	// const [errPass, setErrPass] = useState("");

	const updatePassword = () => {
		// if (edited.confirmPassword != edited.password) {
		// 	setErrPass("The password should match!");
		// } else {
		axios
			.put("http://localhost:3000/updatePass/1", {
				password: edited.confirmPassword,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
		// }
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
			.put("http://localhost:3000/update/1", {
				profile_pic: updatePic.src,
			})
			.then((res) => {
				console.log(res);
				setRes("All good :)");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
				}
			});
	};

	return {
		edited,
		locationC,
		locationR,
		setEdited,
		handleChange,
		handleChangeParse,
		// handleClick,
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
		updatePassword,
		err,
		res,
		// errPass,
	};
}
