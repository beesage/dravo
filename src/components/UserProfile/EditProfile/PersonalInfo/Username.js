import React, { useState } from "react";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Username({ user, setUser }) {
	const classes = useStyles();

	const [edited, setEdited] = useState({
		username: user[0].username,
		id: user[0].beekeeper_id,
	});

	const handleChange = (e) => {
		setEdited({
			...user[0],
			username: e.target.value,
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
				<div className="u-edit-container">
					<Container
						component="main"
						maxWidth={false}
						className={classes.container}
					>
						<form className={classes.root}>
							<p className="edit-caption">Username</p>
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
				<LoadingPage />
			)}
		</>
	);
}
