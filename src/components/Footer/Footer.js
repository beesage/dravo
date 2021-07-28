import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./styles/Footer.css";

export default function Footer() {
	const [isLogin, setIsLogin] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);

	let location = useLocation();

	/**
	 * Display the Footer component according to the location of the app.
	 * <p>
	 * useLocation is a React Hook that returns the location object that represents the current URL.
	 * <p>
	 * When used inside useEffect, it is possible to conditionally check whether the key "pathname" corresponds to a certain location.
	 * If the app is on the URL whose pathname correspond to "/" or "/signup", setIsLoginSignUp and SetIsLogin states change to true; if it corresponds to "/leaderboard", setIsLoginSignUp and SetIsLogin states change to false; if it corresponds to "/settings", setIsLoginSignUp and SetIsLogin states change to true; if it corresponds to "/profile", setIsLoginSignUp and SetIsLogin states change to false.
	 *
	 * @author Alessandra Pettinato
	 */

	useEffect(() => {
		if (location.pathname == "/" || location.pathname == "/signup") {
			setIsSignUp(true);
			setIsLogin(true);
		} else if (location.pathname == "/leaderboard") {
			setIsSignUp(false);
			setIsLogin(false);
		} else if (location.pathname == "/settings") {
			setIsSignUp(true);
			setIsLogin(true);
		} else if (location.pathname == "/profile") {
			setIsSignUp(false);
			setIsLogin(false);
		}
	}, [location.pathname]);

	return (
		<>
			<footer className={!isLogin || !isSignUp ? "show" : "hidden"}>
				<div className="footer-container">
					<br /> Dravo © {new Date().getFullYear()} <br />
					Hospitalu 7-13, Riga, LV-1013 <br /> All rights reserved.
				</div>
			</footer>
		</>
	);
}
