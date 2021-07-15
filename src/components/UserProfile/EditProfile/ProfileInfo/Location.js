import React, { useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import APIContext from "../../../../Context/APIContext";
import UpdateInfo from "../Functions/UpdateInfo";

import LoadingPage from "../../../Spinner/LoadingPage";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Location() {
	const classesEdit = useStylesEdit();
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
					<div className="u-edit-container-mobile">
						<Container
							component="main"
							maxWidth={false}
							className={classesEdit.root}
						>
							<form className={classesEdit.root}>
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
									className={classesEdit.buttonEdit}
								>
									Update
								</Button>
								{res && <p className="err-message">{res}</p>}
							</form>
						</Container>
					</div>
				</>
			) : (
				<LoadingPage />
			)}
			{user.length > 0 ? (
				<div className="u-edit-container-tablet">
					<Container
						component="main"
						maxWidth={false}
						className={classesEdit.containerLocationTablet}
					>
						<form>
							<p className="edit-caption">Country</p>
							<CountryDropdown
								value={locationC.locationC}
								onChange={selectCountry}
								style={{ width: "250px" }}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<p className="edit-caption">Region</p>
							<RegionDropdown
								disableWhenEmpty={true}
								country={locationC.locationC}
								value={locationR.locationR}
								onChange={selectRegion}
								style={{ marginBottom: "1rem", width: "250px" }}
							/>
							{err && (
								<p className="err-message">{err.validationErrors[0].message}</p>
							)}
							<Button
								value="Update"
								text="Update"
								onClick={updateLocation}
								className={classesEdit.buttonTablet}
							>
								Update
							</Button>
							{res && <p className="err-message">{res}</p>}
						</form>
					</Container>
				</div>
			) : (
				<LoadingPage />
			)}
		</>
	);
}
