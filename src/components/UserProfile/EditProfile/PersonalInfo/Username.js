import React from "react";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import InputField from "../../../UserForm/controls/InputField";

export default function Username({ user }) {
	const classes = useStyles();
	return (
		<div>
			<Container
				component="main"
				maxWidth={false}
				className={classes.container}
			>
				<form className={classes.root} noValidate autoComplete="off">
					<InputField
						name="username"
						type="text"
						label="Enter your username"
						value={user[0].username}
					/>
				</form>
			</Container>
		</div>
	);
}
