import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";
import EditUsername from "./EditUsername";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Username({ user, setUser }) {
	const classes = useStyles();

	const [isEditMode] = useState(false);

	const [edited, setEdited] = useState({
		username: user[0].username,
		id: user[0].beekeeper_id,
	});

	const handleChange = (e) => {
		setEdited({ username: e.target.value, id: user[0].beekeeper_id });
		console.log(edited);
	};

	const handleClick = () => {
		const editedArray = user.map((updated) => {
			console.log(updated.beekeeper_id, edited);
			if (updated.beekeeper_id === edited.id) {
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
									<InputField
										name="username"
										type="text"
										id="formUsername"
										onChange={handleChange}
										value={edited.username}
									/>
									<Button
										value="Update"
										text="Update"
										style={{ fontSize: "1em" }}
										onClick={handleClick}
										style={{ width: "100%" }}
									/>
								</form>
							</Container>
						</div>
					) : (
						<EditUsername user={user} handleEdited={handleEdited} />
					)}
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
