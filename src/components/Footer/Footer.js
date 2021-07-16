import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import logo from "../../assets/logo-mobile.png";

import "./styles/Footer.css";

export default function Footer() {
	const [isLogin, setIsLogin] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);

	let location = useLocation();

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
				<img src={logo} className="footer-img" />
				<p style={{ color: "black" }}>DRAVO</p>
			</footer>
		</>
	);
}
