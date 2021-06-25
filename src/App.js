import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./styles.css";

import Header from "./components/Header/Header";
import Leaderboard from "./components/Leaderboard";
import UserProfile from "./components/UserProfile/UserProfile";
import LogIn from "./components/UserForm/LogIn";
import SignUp from "./components/UserForm/SignUp";
import LoadingPage from "./components/Spinner/LoadingPage";

export default function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

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
