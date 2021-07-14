import React, { useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import UpdateInfo from "../Functions/UpdateInfo";
import APIContext from "../../../../Context/APIContext";

import LoadingPage from "../../../Spinner/LoadingPage";

import useStyles from "../../../UserForm/styles/StyleUserForm";
import { Container } from "@material-ui/core";
import Button from "../../../UserForm/controls/Submit";

import "../styles/EditProfile.css";

export default function Location() {
	const classes = useStyles();
	const { user } = useContext(APIContext);
	const {
		locationC,
		locationR,
		selectCountry,
		selectRegion,
		updateLocation,
		err,
		res,
	} = UpdateInfo();

	return (
		<>
			{user.length > 0 ? (
				<>
					<div className="u-edit-container">
						<Container
							component="main"
							maxWidth={false}
							className={classes.container}
						>
							<form className={classes.root}>
								<p className="edit-caption">Country</p>
								<CountryDropdown
									value={locationC.locationC}
									onChange={selectCountry}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<p className="edit-caption">Region</p>
								<RegionDropdown
									disableWhenEmpty={true}
									country={locationC.locationC}
									value={locationR.locationR}
									onChange={selectRegion}
									style={{ marginBottom: "1rem" }}
								/>
								{err && (
									<p className="err-message">
										{err.validationErrors[0].message}
									</p>
								)}
								<Button
									value="Update"
									text="Update"
									style={{ fontSize: "1em" }}
									onClick={updateLocation}
								/>
								{res && <p className="err-message">{res}</p>}
							</form>
						</Container>
					</div>
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
