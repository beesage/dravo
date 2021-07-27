import React, { useState, useContext } from "react";
import APIContext from "../../../../Context/APIContext";
import axios from "axios";

export default function UpdateInfo() {
	const { user } = useContext(APIContext);
	const [edited, setEdited] = useState({
		username: user[0].username,
		email: user[0].email,
		apiaries: "",
		beehives: "",
		experience: "",
		id: user[0].beekeeper_id,
		bio: "",
	});

	const handleChange = (e) => {
		setEdited({
			[e.target.name]: e.target.value,
		});
	};

	const [err, setErr] = useState("");

	const [res, setRes] = useState("");

	let config = {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Request-Method": "PUT/OPTIONS",
		},
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
			.put("http://202.61.225.240:3000/update/1", {
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

	const updateInfo = (id) => {
		axios
			.put(`http://202.61.225.240:3000/update/${id}`, edited)
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

	const inputPassword = () => {
		setShowPassword(!showPassword);
	};

	const inputConfirmPass = () => {
		setShowPassword(!showPassword);
	};

	const [resetPass, setResetPass] = useState({
		password: "",
	});

	const [resetConf, setResetConf] = useState({
		confirmPassword: "",
	});

	const handleResetPass = (e) => {
		setResetPass({
			password: e.target.value,
		});
	};

	const handleResetConf = (e) => {
		setResetConf({
			confirmPassword: e.target.value,
		});
	};

	const updatePassword = () => {
		if (resetPass.password == resetConf.confirmPassword) {
			axios
				.put("http://202.61.225.240:3000/updatePass/1", {
					password: resetConf.confirmPassword,
					config,
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
		} else {
			setRes("Password and Confirm Password should match");
			setErr("");
		}
	};

	const [updatePic, setUpdatePic] = useState({
		pic: false,
		src: false,
	});

	const handlePicture = (e) => {
		let pic = e.target.files[0];
		let src = URL.createObjectURL(pic);
		setUpdatePic({
			pic: pic,
			src: src,
		});
	};

	const preview = () => {
		if (updatePic.src) {
			return <img src={updatePic.src} />;
		}
	};

	const updateProfilePic = (id) => {
		var formData = new FormData();
		formData.append("file", updatePic);

		axios
			.put(`http://202.61.225.240:3000/update/${id}`, {
				profile_picture: updatePic.src,
				// formData,
				// cache: false,
				// contentType: false,
				// processData: false,
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
		inputPassword,
		inputConfirmPass,
		showPassword,
		setShowPassword,
		handlePicture,
		preview,
		selectCountry,
		selectRegion,
		updateInfo,
		updateProfilePic,
		updateLocation,
		updatePassword,
		err,
		res,
		resetPass,
		resetConf,
		handleResetConf,
		handleResetPass,
	};
}
