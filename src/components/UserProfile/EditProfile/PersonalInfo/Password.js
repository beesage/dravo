import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UpdateInfo from "../Functions/UpdateInfo";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// import { InputAdornment, IconButton } from "@material-ui/core";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Password(props) {
	const classesEdit = useStylesEdit();
	const {
		edited,
		handleChange,
		showPassword,
		setShowPassword,
		inputPassword,
		updatePassword,
		err,
		res,
	} = UpdateInfo();

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
					isTablet > breakpoint
						? "tablet-editprofile"
						: "u-edit-container-mobile"
				}
			>
				<div className="row">
					<div className={isTablet > breakpoint ? "column left" : "hidden"}>
						<List>
							<Link to="/settings/personal-info">
								<ListItem>
									<ListItemText>
										<p className="menu-item-tablet">Personal Information</p>
									</ListItemText>
								</ListItem>
							</Link>
							<Divider />
							<Link to="/settings/personal-info/password">
								<ListItem>
									<ListItemText>
										<p className="menu-item-tablet">Password</p>
									</ListItemText>
								</ListItem>
							</Link>
							<Divider />
							<Link to="/settings/profile-info">
								<ListItem>
									<ListItemText>
										<p className="menu-item-tablet">Profile Information</p>
									</ListItemText>
								</ListItem>
							</Link>
							<Divider />
						</List>
					</div>
					<div
						className={
							isTablet > breakpoint ? "column right" : "u-edit-container-mobile"
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
							<form className={classesEdit.root}>
								<p className="edit-caption">Old password</p>
								<Input
									id="formOldPassword"
									name="oldPassword"
									value={edited.oldPassword}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								<p className="edit-caption">New password</p>
								<Input
									id="formNewPassword"
									name="password"
									value={edited.password}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								<p className="edit-caption">Confirm new password</p>
								<Input
									id="formConfirmPassword"
									name="confirmPassword"
									value={edited.confirmPassword}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								<Button
									value="Update"
									text="Update"
									onClick={updatePassword}
									className={classesEdit.buttonEdit}
								>
									Update{" "}
								</Button>
								{res && <p className="res-message">{res}</p>}
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
							</form>
						</Container>
					</div>
				</div>
			</div>
		</>
	);
}
