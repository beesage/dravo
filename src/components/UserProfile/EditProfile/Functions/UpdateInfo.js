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
		apiaries: user[0].apiaries,
		beehives: user[0].beehives,
		experience: user[0].experience,
		bio: "",
	});

	/** handleChange defines the new state of the edited variable called with useState.
	 * <p>
	 * By tracking the event change (e) performed on an input field, it is possible to update the value of the keys included in the edited object.
	 * handleChange is used to update the value of: username, email, password, confirmPassword, apiaries, beehives, experience, bio.
	 * Once updated, this values are then added to the original object, represented by the spread operator.
	 * @param e
	 * @returns updated state of values
	 * @author Alessandra Pettinato
	 */

	const handleChange = (e) => {
		setEdited({
			...edited,
			[e.target.name]: e.target.value,
		});
	};

	/**	 selectCountry updates the value of the key "country" included in the edited variable called with useState.
	 * <p>
	 * By tracking the event change (val) performed on a dropdown menu, it is possible to update the value of country.
	 * selectCountry is used to update only the value of country.
	 * @param val
	 * @returns updated state of a value
	 * @author Alessandra Pettinato
	 */

	const selectCountry = (val) => {
		setEdited({
			country: val,
		});
	};

	/**	 selectRegion updates the value of the key "region" included in the edited variable called with useState.
	 * <p>
	 * By tracking the event change (val) performed on a dropdown menu, it is possible to update the value of region.
	 * Since "region" can be updated only if its counterpart "country" has already been selected, it is mandatory to include in the function the previous object -represented by the spread operator.
	 * selectCountry is used to update only the value of region.
	 * @param val
	 * @returns updated state of a value
	 * @author Alessandra Pettinato
	 */

	const selectRegion = (val) => {
		setEdited({ ...edited, region: val });
	};

	const [err, setErr] = useState("");

	const [res, setRes] = useState("");

	const updateInfo = (id) => {
		const updatedValues = edited;
		delete updatedValues.confirmPassword;
		axios
			.put(`http://202.61.225.240:3000/update/${id}`, updatedValues)
			.then((res) => {
				const updatedArray = user.map((u) => {
					if (u.beekeeper_id === res.data[0].beekeeper_id) {
						return res.data[0];
					} else {
						return u;
					}
				});
				console.log("From updateInfo", res);
				setRes("Successfully updated");
				setErr("");
				setUser(updatedArray);
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
