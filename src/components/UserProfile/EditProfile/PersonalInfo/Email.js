import React, { useState, useEffect } from "react";

import UpdateInfo from "../Functions/UpdateInfo";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Email() {
	const classesEdit = useStylesEdit();
	const { edited, handleChange, updateEmail, err, res } = UpdateInfo();

	const [isTablet, setIsTablet] = useState(window.innerWidth);
	const breakpoint = 768;

	useEffect(() => {
		const handleResizeWindow = () => setIsTablet(window.innerWidth);
		// subscribe to window resize event "onComponentDidMount"
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			// unsubscribe "onComponentDestroy"
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	return (
		<>
			<div
				className={
					isTablet < breakpoint
						? "u-edit-container-mobile"
						: "u-edit-container-tablet"
				}
			>
				<Container
					component="main"
					maxWidth={false}
					className={
						!isTablet < breakpoint
							? classesEdit.container
							: classesEdit.containerTablet
					}
				>
					<p className="edit-caption">Email</p>
					<form className={classesEdit.root}>
						<Input
							name="email"
							type="text"
							id="formEmail"
							onChange={handleChange}
							value={edited.email}
							className={classesEdit.textField}
						/>
						<Button
							value="Update"
							text="Update"
							onClick={updateEmail}
							className={classesEdit.buttonEdit}
						>
							Update
						</Button>
						{res && <p className="res-message">{res}</p>}
						{err && (
							<p className="err-message">{err.validationErrors[0].message}</p>
						)}
					</form>
				</Container>
			</div>
		</>
	);
}
