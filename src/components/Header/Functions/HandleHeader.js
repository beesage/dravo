import { useState } from "react";

export default function handleHeader() {
	const [isUserProfile, setIsUserProfile] = useState(false);

	const [isLoginPage, setIsLoginPage] = useState(false);

	const [isEditProfile, setIsEditProfile] = useState(false);

	const [isPersonalInfo, setIsPersonalInfo] = useState(false);

	const [backToSettings, setBackToSettings] = useState(false);

	const [isSettings, setIsSettings] = useState(false);

	const [isProfileInfo, setIsProfileInfo] = useState(false);

	/** handleEditProfile defines the new state of the isEditProfile variable called with useState.
	 * <p>
	 * When called, handleEditProfile set the new state of isEditProfile, which is initially false, to true.
	 * It is done so by updating the function setIsEditProfile.
	 * @author Alessandra Pettinato
	 */

	const handleEditProfile = () => {
		setIsEditProfile(true);
	};

	/** handleBackTo defines the new state of the backToProfile variable called with useState.
	 * <p>
	 * When called, handleEditProfile set the new state of handleBackTo, which is initially false, to true.
	 * It is done so by updating the function setBackToSettings.
	 * @author Alessandra Pettinato
	 */

	const handleBackTo = () => {
		setBackToSettings(true);
	};

	/** handleIsSettings defines the new state of the isSettings variable called with useState.
	 * <p>
	 * When called, handleIsSettings set the new state of isSettings, which is initially false, to true.
	 * It is done so by updating the function setIsSettings.
	 * @author Alessandra Pettinato
	 */

	const handleIsSettings = () => {
		setIsSettings(true);
	};

	return {
		isUserProfile,
		setIsUserProfile,
		isLoginPage,
		setIsLoginPage,
		isEditProfile,
		setIsEditProfile,
		handleEditProfile,
		backToSettings,
		setBackToSettings,
		isPersonalInfo,
		setIsPersonalInfo,
		isProfileInfo,
		setIsProfileInfo,
		handleBackTo,
		isSettings,
		setIsSettings,
		handleIsSettings,
	};
}
