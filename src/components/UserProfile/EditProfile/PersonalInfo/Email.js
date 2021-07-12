import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Email({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const [edited, setEdited] = useState({
		email: user[0].email,
		id: user[0].beekeeper_id,
	});

	const handleChange = (e) => {
		setEdited({ ...user[0], email: e.target.value });
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
								<p className="edit-caption">Email</p>
								<form className={classes.root}>
									<InputField
										name="email"
										type="text"
										id="formEmail"
										onChange={handleChange}
										value={edited.email}
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
