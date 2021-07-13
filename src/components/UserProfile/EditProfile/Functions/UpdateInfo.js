import React, { useState, useContext } from "react";
import APIContext from "../../../../Context/APIContext";

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
		country: "",
		region: "",
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

	// const [newCountry, setNewCountry] = useState({
	// 	country: user[0].country,
	// 	id: user[0].beekeeper_id,
	// });

	const selectCountry = (val) => {
		setEdited({
			country: val,
		});
	};

	// const [newRegion, setNewRegion] = useState({
	// 	region: user[0].region,
	// });

	const selectRegion = (val) => {
		setEdited({ region: val });
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
		setEdited,
		handleChange,
		handleChangeParse,
		handleClick,
		handlePicture,
		preview,
		// newCountry,
		// setNewCountry,
		// newRegion,
		// setNewRegion,
		selectCountry,
		selectRegion,
		// updateCountryRegion,
	};
}
