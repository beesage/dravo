import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <div className="footer-container">
          <br /> Dravo © {new Date().getFullYear()} <br />
          Hospitalu 7-13, Riga, LV-1013 <br /> All rights reserved.
        </div>
      </footer>
    </>
  );
}
