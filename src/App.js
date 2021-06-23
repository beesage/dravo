import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./styles.css";

import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import UserProfile from "./components/UserProfile/UserProfile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import LoadingPage from "./components/Spinner/LoadingPage";

export default function App() {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);

	// @author Alessandra Pettinato <alessandrapettinato@hotmail.it>
	// Fetch data from the specified API
	// @async
	// @function userAPI
	// @param {string} "http://202.61.225.240:3000/beewhoyouwant" - The API to fetch data from
	// @return {object} res.data - The data fetched from the API

	useEffect(() => {
		const userAPI = async () => {
			setLoading(true);
			const res = await axios.get("http://202.61.225.240:3000/beewhoyouwant");
			setUser(res.data);
			setLoading(false);
		};
		userAPI();
	}, []);

	console.log(user);

	return (
		<div className="container">
			{!loading ? (
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" component={LogIn} />
						<Route path="/signup" component={SignUp} />
						<Route
							path="/leaderboard"
							render={(props) => <Leaderboard user={user} />}
						/>
						<Route
							path="/profile"
							render={() => <UserProfile user={user} loading={loading} />}
						/>
					</Switch>
				</Router>
			) : (
				<LoadingPage />
			)}
		</div>
	);
}
