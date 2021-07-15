import React, { useContext } from "react";
import { Link } from "react-router-dom";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function ProfilePic() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { handlePicture, preview, updateProfilePic, err, res } = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<div className="u-edit-container-mobile">
					<Container
						component="main"
						maxWidth={false}
						className={classesEdit.root}
					>
						<p className="edit-caption">Upload your pic</p>
						<input
							type="file"
							text="Submit"
							onChange={handlePicture}
							className="submit-pic"
						/>
						<div className="preview">{preview()}</div>
						{err && (
							<p className="err-message">{err.validationErrors[0].message}</p>
						)}
						<Button
							onClick={updateProfilePic}
							text="Upload"
							className={classesEdit.buttonEdit}
						>
							Upload
						</Button>
						{res && <p className="err-message">{res}</p>}
					</Container>
				</div>
			) : (
				<LoadingPage />
			)}
			{user.length > 0 ? (
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
							<div className="u-edit-container-tablet">
								<Container
									component="main"
									maxWidth={false}
									className={classesEdit.containerTablet}
								>
									<form>
										<input
											type="file"
											text="Submit"
											onChange={handlePicture}
											className="submit-pic"
										/>
										{err && (
											<p className="err-message">
												{err.validationErrors[0].message}
											</p>
										)}
										<Button
											onClick={updateProfilePic}
											text="Upload"
											className={classesEdit.buttonTabletPic}
										>
											Upload pic
										</Button>
										{res && <p className="err-message">{res}</p>}
									</form>
								</Container>
							</div>
						</div>
					</div>
				</div>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
