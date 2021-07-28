import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import APIContext from "./Context/APIContext";

import "./styles.css";

import Header from "./components/Header/Header";
import Leaderboard from "./components/leaderboard/Leaderboard";
import UserProfile from "./components/UserProfile/UserProfile";
import LogIn from "./components/UserForm/LogIn";
import SignUp from "./components/UserForm/SignUp";
import ForgotPassword from "./components/UserForm/ForgotPassword";
import LoadingPage from "./components/Spinner/LoadingPage";
import EditProfile from "./components/UserProfile/EditProfile/EditProfile";
import PersonalInformation from "./components/UserProfile/EditProfile/PersonalInfo/PersonalInformation";
import Username from "./components/UserProfile/EditProfile/PersonalInfo/Username";
import Email from "./components/UserProfile/EditProfile/PersonalInfo/Email";
import Password from "./components/UserProfile/EditProfile/PersonalInfo/Password";
import ProfileInformation from "./components/UserProfile/EditProfile/ProfileInfo/ProfileInformation";
import ProfilePic from "./components/UserProfile/EditProfile/ProfileInfo/ProfilePic";
import Location from "./components/UserProfile/EditProfile/ProfileInfo/Location";
import Bio from "./components/UserProfile/EditProfile/ProfileInfo/Bio";
import Experience from "./components/UserProfile/EditProfile/ProfileInfo/Experience";
import Apiaries from "./components/UserProfile/EditProfile/ProfileInfo/Apiaries";
import Beehives from "./components/UserProfile/EditProfile/ProfileInfo/Beehives";
import Footer from "./components/Footer/Footer";

export default function App() {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [days, setDays] = useState("30");

	useEffect(() => {
		/**
		 * Fetch data via Axios from the API URL and store the fetched user array in the user state
		 * <p>
		 * The userAPI function is declared inside an useEffect Hook with an empty array
		 * as a second argument, which prevents re-rendering. The setLoading function, with
		 * an initial state of "false", changes to "true" after waiting for the asynchronous
		 * task of fetching the userAPI to finish. This is regulated through an async / await
		 * operation to fetch data from the stated API through a GET request with Axios. Once the
		 * asynchronous task is successfully returned, the data are stored in setUsed,
		 * and setLoading is set to "false".
		 *
		 * @author Alessandra Pettinato
		 * @author Lukas Kreibig
		 */

		const userAPI = async () => {
			setLoading(true);
			const res = await axios.get(`http://202.61.225.240:3000/lb/${days}`);
			setUser(res.data);
			setLoading(false);
		};
		userAPI(days);
	}, [days]);

	console.log("From App", user);

	const handleDays = (changeDays) => {
		setDays(changeDays);
	};

	return (
		<div className="container">
			<APIContext.Provider value={{ user: user, setUser: setUser }}>
				{!loading ? (
					<Router>
						<Header />
						<Switch>
							<Route exact path="/" component={LogIn} />
							<Route path="/signup" component={SignUp} />
							<Route path="/forgotpassword" component={ForgotPassword} />
							<Route
								path="/leaderboard"
								render={(props) => (
									<Leaderboard user={user} handleDays={handleDays} />
								)}
							/>
							<Route path="/profile" component={UserProfile} />
							<Route exact path="/settings" component={EditProfile} />
							<Route
								exact
								path="/settings/personal-info"
								component={PersonalInformation}
							/>
							<Route
								exact
								path="/settings/personal-info/username"
								component={Username}
							/>
							<Route
								exact
								path="/settings/personal-info/email"
								component={Email}
							/>
							<Route
								exact
								path="/settings/personal-info/password"
								component={Password}
							/>
							<Route
								exact
								path="/settings/profile-info"
								component={ProfileInformation}
							/>
							<Route
								exact
								path="/settings/profile-info/profile-pic"
								component={ProfilePic}
							/>
							<Route
								exact
								path="/settings/profile-info/location"
								component={Location}
							/>
							<Route exact path="/settings/profile-info/bio" component={Bio} />
							<Route
								exact
								path="/settings/profile-info/experience"
								component={Experience}
							/>
							<Route
								exact
								path="/settings/profile-info/apiaries"
								component={Apiaries}
							/>
							<Route
								exact
								path="/settings/profile-info/beehives"
								component={Beehives}
							/>
						</Switch>
						<Footer />
					</Router>
				) : (
					<LoadingPage />
				)}
			</APIContext.Provider>
		</div>
	);
}
