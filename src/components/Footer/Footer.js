import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";
import logo from "../../assets/logo-mobile.png";

import "./styles/Footer.css";

function Copyright() {
	return (
	  <Typography variant="body2" color="white" align="center">
		{"Hospitalu 7-13, Riga, LV-1013"} <br/> 
		{"Dravo © "}{new Date().getFullYear()}{". All rights reserved."}
	  </Typography>
	);
  }

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
				<div className="footer-container">
					<img src={logo} className="footer-img" />
					<p style={{ color: "#314E52", fontWeight: 800 }}>DRAVO</p>
					<Copyright />
				</div>
			</footer>
		</>
	);
}
