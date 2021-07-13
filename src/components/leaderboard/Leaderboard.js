import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import lbcrown from "../../assets/crown.png";
import "./leaderboard.css";

function Leaderboard({ user, loading }) {
  const [wd, setWd] = useState([]);
  const [wdWeek, setWdWeek] = useState([]);
  const [wdMonth, setWdMonth] = useState([]);
  const [wdAll, setWdAll] = useState([]);
  const [days, setDays] = useState(30);

  // let state = setWd(fetch.data);

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
     * @author Lukas Kreibig
     */

    const weightDeltaApi = async (days) => {
      // setLoading(true);
      const fetch = await axios.get(`http://202.61.225.240:3000/lb/${days}`);
      setWd(fetch.data);
      // setLoading(false);
    };
    weightDeltaApi();
  }, []);
  console.log(wd);

  const left = {
    divprop: "lb-top-left",
    pic: "lb-pic-middle",
    lbicon: null,
    lbiconlink: null,
  };
  const middle = {
    divprop: "lb-top-big",
    pic: "lb-pic-big",
    lbicon: "lb-icon-middle",
    lbiconlink: lbcrown,
  };
  const right = {
    divprop: "lb-top-right",
    pic: "lb-pic-middle",
    lbicon: null,
    lbiconlink: null,
  };

  /**
   * Sorting the passed down array user by their value weight delta
   * in descending order.
   * <p>
   * This function recieves the array "user" and uses the sort() method
   * to sort the array. The default sort order is ascending, built upon
   * converting the elements into strings, then comparing their sequences
   * of UTF-16 code units values. This function recieves b as a first argument
   * and a as a second argument to change the sort oder to descending.
   *
   * @param   a  starting point of the elements in an array
   * @param   b  endpoint of the element in an array
   * @return     returns the sorted array "user"
   * @author     Lukas Kreibig
   */

  user.sort((b, a) => parseFloat(a.weight_delta) - parseFloat(b.weight_delta));

  let lbTop = user.slice(0, 3);
  let lbAll = user.slice(3);

  return (
    <>
      {user.length > 0 ? (
        <>
          <div className="lb-honeycomb" id="lb-honeycomb-left">
            <span></span>
          </div>
          <div className="lb-honeycomb" id="lb-honeycomb-middle">
            <span></span>
          </div>
          <div className="lb-honeycomb" id="lb-honeycomb-right">
            <span></span>
          </div>
          <div className="lb-triangle" id="lb-triangle-left">
            <div className="lb-triangle-text" id="lb-triangle-transform">
              This Week
            </div>
          </div>
          <div className="lb-triangle" id="lb-triangle-center">
            <div className="lb-triangle-text" id="lb-triangle-rotate-text">
              This Month
            </div>
          </div>
          <div className="lb-triangle" id="lb-triangle-right">
            <div className="lb-triangle-text" id="lb-triangle-transform">
              All Time
            </div>
          </div>

          <div className="lb-button">
            <Button
              style={{
                textTransform: "none",
                fontSize: "10px",
                backgroundColor: "#314e52",
                color: "#f2a154",
                borderRadius: "0%",
              }}
            >
              Today
            </Button>

            <Button
              style={{
                textTransform: "none",
                fontSize: "10px",
                color: "#314e52",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0%",
              }}
            >
              Week
            </Button>

            <Button
              style={{
                width: "100",
                textTransform: "none",
                fontSize: "10px",
                color: "#314e52",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0%",
              }}
            >
              Month
            </Button>
            <Button
              style={{
                textTransform: "none",
                fontSize: "10px",
                color: "#314e52",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0%",
              }}
            >
              All Time
            </Button>
          </div>

          <div className="leaderboard-top"></div>
          <LeaderboardBest user={lbTop[1]} orientation={left} rank={2} />
          <LeaderboardBest user={lbTop[0]} orientation={middle} rank={1} />
          <LeaderboardBest user={lbTop[2]} orientation={right} rank={3} />

          <div className="lb-all">
            {lbAll.map((user, index) => (
              <div key={index}>
                <LeaderboardCard user={user} index={index} />
              </div>
            ))}
          </div>
        </>
      ) : (
        loading
      )}
    </>
  );
}

export default Leaderboard;
