import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

function Leaderboard({ user, loading }) {
  const left = { divprop: "lb-top-left", pic: "lb-pic-middle" };
  const middle = { divprop: "lb-top-big", pic: "lb-pic-big" };
  const right = { divprop: "lb-top-right", pic: "lb-pic-middle" };

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
   * @author    Lukas Kreibig
   */

  user.sort((b, a) => parseFloat(a.weightdelta) - parseFloat(b.weightdelta));

  let lbTop = user.slice(0, 3);
  let lbAll = user.slice(4);

  return (
    <>
      {user.length > 0 ? (
        <>
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
