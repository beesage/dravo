import React, { useState, useEffect, useContext } from "react";

import UpdateInfo from "../Functions/UpdateInfo";
import APIContext from "../../../../Context/APIContext";

import { Container } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import "../styles/EditProfile.css";
import useStylesEdit from "../styles/EditStyle";

export default function Username() {
	const classesEdit = useStylesEdit();
	const { edited, handleChange, updateInfo, err, res } = UpdateInfo();
	const { user } = useContext(APIContext);

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
					<form className={classesEdit.root}>
						<p className="edit-caption">Username</p>
						<Input
							name="username"
							type="text"
							id="formUsername"
							onChange={handleChange}
							value={edited.username}
							className={classesEdit.textField}
						/>

						<Button
							value="Update"
							text="Update"
							onClick={() => updateInfo(user[0].beekeeper_id)}
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
