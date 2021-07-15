import React, { useContext } from "react";
import { Link } from "react-router-dom";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Password() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { edited, handleChange, updatePassword, err, res } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<>
					<div className="u-edit-container-mobile">
						<Container
							component="main"
							maxWidth={false}
							className={classesEdit.container}
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
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">New password</p>
								<Input
									id="formNewPassword"
									name="password"
									value={edited.password}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">Confirm new password</p>
								<Input
									id="formConfirmPassword"
									name="confirmPassword"
									value={edited.confirmPassword}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<Button
									value="Update"
									text="Update"
									onClick={updatePassword}
									className={classesEdit.buttonEdit}
								>
									Update{" "}
								</Button>
								{res && <p className="err-message">{res}</p>}
							</form>
						</Container>
					</div>
				</>
			) : (
				<LoadingPage />
			)}
			<div className="tablet-editprofile">
				<div className="row">
					<div className="column left">
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
					<div className="column right">
						<Container
							component="main"
							maxWidth={false}
							className={classesEdit.containerTablet}
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
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">New password</p>
								<Input
									id="formNewPassword"
									name="password"
									value={edited.password}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">Confirm new password</p>
								<Input
									id="formConfirmPassword"
									name="confirmPassword"
									value={edited.confirmPassword}
									onChange={handleChange}
									className={classesEdit.textField}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<Button
									value="Update"
									text="Update"
									onClick={updatePassword}
									className={classesEdit.buttonEdit}
								>
									Update{" "}
								</Button>
								{res && <p className="err-message">{res}</p>}
							</form>
						</Container>
					</div>
				</div>
			</div>
		</>
	);
}
