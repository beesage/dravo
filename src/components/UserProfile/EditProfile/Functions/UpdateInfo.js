import React, { useState, useContext } from "react";
import APIContext from "../../../../Context/APIContext";
import axios from "axios";

export default function UpdateInfo() {
	const { user } = useContext(APIContext);
	const [edited, setEdited] = useState({
		username: user[0].username,
		email: user[0].email,
		apiaries: user[0].apiaries,
		beehives: user[0].beehives,
		experience: user[0].experience,
		password: "",
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

	// const selectCountry = (val) => {
	// 	setLocationC({
	// 		locationC: val,
	// 	});
	// 	setEdited((prevState) => {
	// 		return { ...prevState, country: locationC.locationC };
	// 	});
	// };

	const [locationR, setLocationR] = useState({
		locationR: "",
	});

	const selectRegion = (val) => {
		setLocationR({ locationR: val });
	};

	// const selectRegion = (val) => {
	// 	setLocationR({ locationR: val });
	// 	setEdited((prevState) => {
	// 		return { ...prevState, region: locationR.locationR };
	// 	});
	// };

	const updateLocation = () => {
		axios
			.put("http://localhost:3000/update/1", {
				country: locationC.locationC,
				region: locationR.locationR,
			})
			.then((res) => {
				console.log(res);
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
				}
			});
	};

	const [err, setErr] = useState("");

	const [res, setRes] = useState("");

	const updateUsername = () => {
		axios
			.put("http://localhost:3000/update/1", {
				username: edited.username,
			})
			.then((res) => {
				console.log(res);
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
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
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
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
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
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
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
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
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
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
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
				}
			});
	};

	const [showPassword, setShowPassword] = useState(false);

	const inputPassword = (e) => {
		setShowPassword(!showPassword);
	};

	// const [errPass, setErrPass] = useState("");

	const updatePassword = () => {
		axios
			.put("http://localhost:3000/updatePass/1", {
				password: edited.confirmPassword,
			})
			.then((res) => {
				console.log(res);
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
				}
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
			.put("http://localhost:3000/update/1", {
				profile_pic: updatePic.src,
			})
			.then((res) => {
				console.log(res);
				setRes("Successfully updated");
				setErr("");
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
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
		inputPassword,
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
