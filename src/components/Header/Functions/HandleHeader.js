import { useState } from "react";

export default function handleHeader() {
	const [isUserProfile, setIsUserProfile] = useState(false);

	const [isLoginPage, setIsLoginPage] = useState(false);

	const [isEditProfile, setIsEditProfile] = useState(false);

	const [isPersonalInfo, setIsPersonalInfo] = useState(false);

	const [backToSettings, setBackToSettings] = useState(false);

	const [isSettings, setIsSettings] = useState(false);

	const [isProfileInfo, setIsProfileInfo] = useState(false);

	const handleEditProfile = () => {
		setIsEditProfile(true);
	};

	const handleBackTo = () => {
		setBackToSettings(true);
	};

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
