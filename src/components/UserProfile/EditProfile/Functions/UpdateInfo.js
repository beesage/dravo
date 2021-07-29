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
		region: user[0].region,
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

	/** updateInfo sends to the server an HTTP PUT request to the chosen API endpoint.
	 * <p>
	 * updatedValues is a variable who retains the keys contained in the edited object called with useState.
	 * Using the reserved Javascript word "delete", the information sent to the server don't include the unwanted keys.
	 * The PUT request can then be sent through axios to the relevant endpoint, using the variable updatedValues as a second argument.
	 * <p>
	 * If the response to the request is successful, the new array "updatedArray" is created by looping through the "user" array.
	 * If the id of the element processed in the array (u) is the same as the one of the response, then the response itself is returned; otherwise, the element (u) is returned.
	 * The "user" array can then receive its new value (in "setUser") from the "updatedArray".
	 * <p>
	 * At the same time, the value of the "err" and "res" variables are updated (respectively in "setErr" and "setRes").
	 * <p>
	 * If the response from the server is not successful, the relevant error is catched and its value stored in the "err" variable (in "setErr"); "res" is simultaneously updated (in "setRes")
	 * @param id
	 * @returns updated state of a value
	 * @author Alessandra Pettinato
	 */

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
				setUser(updatedArray);
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

	let config = {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Request-Method": "PUT/OPTIONS",
		},
	};

	/** updatePassword send to the server an HTTP PUT request to the chosen API endpoint.
	 * <p>
	 * Before sending the request to the server, the value of "password" and "confirmPassword" stored in the edited object are compared: if they are the same, then the PUT request can be sent through axios; on the contrary, the value of "res" and "err" are updated (respectively in "setRes" and "setErr").
	 * <p>
	 * The PUT request is sent through axios to the relevant endpoint, using "password" as a second argument, and "config", which contains the headers information, as a third.
	 * If the request is successfully executed, the value of the "err" and "res" variables are updated (respectively in "setErr" and "setRes").
	 * <p>
	 * If the response from the server is not successful, the relevant error is catched and its value stored in the "err" variable (in "setErr"); "res" is simultaneously updated (in "setErr")
	 * @param id
	 * @author Alessandra Pettinato
	 */

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
		pic: "",
		src: "",
	});

	/** handlePicture updates the values of the updatePic variable called with useState after an onClick event.
	 * <p>
	 * "pic" and "src" are two empty strings declared inside the updatePic object. In the function, to "pic" is assigned the value of "e", an event triggered by the onClick event, which will target a file image.
	 * To assign a value to "src", instead, it is used "createObjectURL", a method that creates a DOMString containing a URL representing the object given in the parameter -which in this case is "pic" itself.
	 * The values contained in the "updatePic" object can then be set to, respectively, "pic" and "src" itself.
	 * @param e
	 * @returns updated state of a value
	 * @author Alessandra Pettinato
	 */

	const handlePicture = (e) => {
		let pic = e.target.files[0];
		let src = URL.createObjectURL(pic);
		setUpdatePic({
			pic: pic,
			src: src,
		});
	};

	/** updatePassword send to the server an HTTP PUT request to the chosen API endpoint.
	 * <p>
	 * A new variable is declared ("formData") and its value set to a new FormData, which will provide a way to construct a set of key/value pairs to be sent to the server.
	 * The method append is used to attach a new name and value onto an existing key inside a FormData object: in this case, name would be "blob" and the value to attach would be "updatePic.src".
	 * "configPic" contains the information that has to be passes from the client to the server: the "formData" variable, "cache" (set to false), "contentType" (set to false), "processData" (set to false), and "responseType" (seto to blob).
	 * <p>
	 * The PUT request is sent through axios to the relevant endpoint, using "profile_picture" as a second argument, and "configPic" as a third.
	 * If the request is successfully executed, the value of the "err" and "res" variables are updated (respectively in "setErr" and "setRes").
	 * <p>
	 * If the response from the server is not successful, the relevant error is catched and its value stored in the "err" variable (in "setErr"); "res" is simultaneously updated (in "setErr")
	 * @param id
	 * @author Alessandra Pettinato
	 */

	const updateProfilePic = (id) => {
		let formData = new FormData();
		formData.append("blob", updatePic.src);
		const configPic = {
			formData,
			cache: false,
			contentType: false,
			processData: false,
			responseType: "blob",
		};
		axios
			.put(
				`http://202.61.225.240:3000/update/${id}`,
				{
					profile_picture: updatePic.src,
				},
				configPic
			)
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
		handlePicture,
		selectCountry,
		selectRegion,
		updateInfo,
		updateProfilePic,
		updatePassword,
		err,
		res,
	};
}
