import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Experience({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const [edited, setEdited] = useState({
		experience: +user[0].experience,
		id: user[0].beekeeper_id,
	});

	const handleChange = (e) => {
		setEdited({
			...user[0],
			experience: +e.target.value,
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
									<p className="edit-caption">Experience</p>
									<InputField
										name="experience"
										type="number"
										id="formExperience"
										onChange={handleChange}
										value={edited.experience}
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
