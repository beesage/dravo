import React, { useState, useContext } from "react";
import APIContext from "../../../../Context/APIContext";
import axios from "axios";

export default function UpdateInfo() {
	const { user, setUser } = useContext(APIContext);
	const [edited, setEdited] = useState({
		username: user[0].username,
		email: user[0].email,
		password: "",
		confirmPassword: "",
		country: user[0].country,
		region: user[0].country,
		apiaries: 1,
		beehives: 1,
		experience: user[0].experience,
		bio: "",
	});

	/** handleChange defines the new state of the variable called with useState.
	 * <p>
	 * By listening to the event (e) performed on an input field, we are able to update the value of the edited object (username, email, password, confirmPassword, country, region, apiaries, beehives, experience, bio)
	 */

	const handleChange = (e) => {
		setEdited({
			...edited,
			[e.target.name]: e.target.value,
		});
	};

	const [err, setErr] = useState("");

	const [res, setRes] = useState("");

	const updateInfo = (id) => {
		const updatedValues = edited;
		delete updatedValues.confirmPassword;
		axios
			.put(`http://202.61.225.240:3000/update/${id}`, updatedValues)
			.then((res) => {
				console.log("From updateInfo", res.data);
				setRes("Successfully updated");
				setErr("");
				// if (res.data.id )
				setUser([...user, res.data[0]]);
			})
			.catch((err) => {
				if (err.response) {
					setErr(err.response.data);
					setRes("");
				}
			});
	};

	// const [location, setLocation] = useState({
	// 	country: "",
	// 	region: "",
	// });

	// const selectCountry = (val) => {
	// 	setLocation({
	// 		country: val,
	// 	});
	// };

	// const selectRegion = (val) => {
	// 	setLocation({ ...location, region: val });
	// };

	const selectCountry = (val) => {
		setEdited({
			country: val,
		});
	};

	const selectRegion = (val) => {
		setEdited({ ...edited, region: val });
	};

	// const updateLocation = (id) => {
	// 	axios
	// 		.put(`http://202.61.225.240:3000/update/${id}`, {
	// 			country: edited.country,
	// 			region: edited.region,
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 			setRes("Successfully updated");
	// 			setErr("");
	// 		})
	// 		.catch((err) => {
	// 			if (err.response) {
	// 				setErr(err.response.data);
	// 				setRes("");
	// 			}
	// 		});
	// };

	const [showPassword, setShowPassword] = useState(false);

	const inputPassword = () => {
		setShowPassword(!showPassword);
	};

	let config = {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Request-Method": "PUT/OPTIONS",
		},
	};

	const updatePassword = (id) => {
		if (edited.password == edited.confirmPassword) {
			axios
				.put(`http://202.61.225.240:3000/updatePass/${id}`, {
					password: edited.confirmPassword,
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
		location,
		setEdited,
		handleChange,
		// handleChangeParsed,
		inputPassword,
		showPassword,
		setShowPassword,
		handlePicture,
		preview,
		selectCountry,
		selectRegion,
		updateInfo,
		// updateLocation,
		updateProfilePic,
		updatePassword,
		err,
		res,
	};
}
