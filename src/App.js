import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./styles.css";

import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import UserProfile from "./components/UserProfile";

export default function App() {
	const [user, setUser] = useState([]);
	const [loading, setIsLoading] = useState(false);

	const userAPI = () => {
		setIsLoading(true);
		axios
			.get("http://202.61.225.240:3000/beewhoyouwant")
			.then((res) => setUser(res.data));
		setIsLoading(false);
	};

	useEffect(userAPI, []);

	console.log(user);

	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route path="/leaderboard" component={Leaderboard} />
					<Route
						path="/profile"
						render={() => <UserProfile user={user} loading={loading} />}
					/>
				</Switch>
			</Router>
		</div>
	);
}
