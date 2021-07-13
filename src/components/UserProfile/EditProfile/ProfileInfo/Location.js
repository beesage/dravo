import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Location({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const [edited, setEdited] = useState({
		city: "",
		country: "",
		id: user[0].beekeeper_id,
	});

	const handleChange = (e) => {
		setEdited((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleClick = () => {
		const editedArray = user.map((updated) => {
			if (updated.beekeeper_id === edited.id) {
				return edited;
			} else {
				return updated, user[0];
			}
		});
		setUser(editedArray);
	};

	return (
		<>
			{user.length > 0 ? (
				<>
					{!isEditMode ? (
						<div className="u-edit-container">
							<Container
								component="main"
								maxWidth={false}
								className={classes.container}
							>
								<form className={classes.root}>
									<p className="edit-caption">City</p>
									<InputField
										name="city"
										type="text"
										id="formCity"
										value={edited.city}
										onChange={handleChange}
									/>
									<p className="edit-caption">Country</p>
									<InputField
										name="country"
										type="text"
										id="formCountry"
										value={edited.country}
										onChange={handleChange}
									/>
									<Button
										value="Update"
										text="Update"
										style={{ fontSize: "1em" }}
										onClick={handleClick}
									/>
								</form>
							</Container>
						</div>
					) : (
						""
					)}
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
