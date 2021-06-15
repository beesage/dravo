import React from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";
import Leaderboard from "./components/Leaderboard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState([]);

  const userAPI = () => {
    axios
      .get("http://202.61.225.240:3000/beewhoyouwant")
      .then((res) => setUser(res.data));
  };

  useEffect(userAPI, []);

  console.log(user);

  return (
    <div className="container">
      <Leaderboard />
    </div>
  );
}
