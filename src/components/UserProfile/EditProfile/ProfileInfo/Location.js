import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import UpdateInfo from "../Functions/UpdateInfo";
import APIContext from "../../../../Context/APIContext";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Location() {
	const classesEdit = useStylesEdit();
	const { user } = useContext(APIContext);
	const { edited, selectCountry, selectRegion, updateInfo, err, res } =
		UpdateInfo();

	const [isTablet, setIsTablet] = useState(window.innerWidth);
	const breakpoint = 768;

	/** handleResizeWindow tracks the resize of the window and update the state accordingly.
	 * <p>
	 * When called inside useEffect, handleResizeWindow will update the isTable variable called with useState by updating the setIsTablet function.
	 * The event listener will subscribe to the resize of the window and, once performed, will return the remove event listener to clean after itself.
	 * @returns updated state of a value
	 * @author Alessandra Pettinato
	 *
	 */

	useEffect(() => {
		const handleResizeWindow = () => setIsTablet(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
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
								<p className="edit-caption">Country</p>
								<CountryDropdown
									value={edited.country}
									onChange={selectCountry}
								/>
								<p className="edit-caption">Region</p>
								<RegionDropdown
									disableWhenEmpty={true}
									country={edited.country}
									value={edited.region}
									onChange={selectRegion}
									style={{ marginBottom: "1rem" }}
								/>
							</form>
							<Button
								value="Update"
								text="Update"
								style={{ fontSize: "1em" }}
								onClick={() => updateInfo(user[0].beekeeper_id)}
								className={classesEdit.buttonEdit}
							>
								Update
							</Button>
							{res && <p className="res-message">{res}</p>}
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
						</Container>
					</div>
				</div>
			</div>
		</>
	);
}
