import React, { useState } from "react";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";
import Button from "../../../UserForm/controls/Submit";

export default function EditUsername({ user, handleEdited }) {
	const classes = useStyles();

	const [edited, setEdited] = useState({
		username: user[0].username,
	});

	const handleChange = (e) => {
		setEdited((prevState) => {
			return { ...prevState, [e.target.name]: [e.target.value] };
		});
	};

	const handleClick = () => {
		handleEdited({ ...edited, beekeeper_id });
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
							<InputField
								name="username"
								type="text"
								id="formUsername"
								onChange={handleChange}
								value={edited.username}
							/>
							<Button
								type="update"
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
	);
}
