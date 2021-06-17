import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import { makeStyles } from "@material-ui/core/styles";

function Leaderboard({ user, loading }) {
  const left = { divprop: "lb-top-left", pic: "lb-pic-left" };
  const middle = { divprop: "lb-top-big", pic: "lb-pic-big" };
  const right = { divprop: "lb-top-right", pic: "lb-pic-right" };

  return (
    <>
      {user.length > 0 ? (
        <>
          <div className="lb-button">
            <button variant="contained" color="primary">
              Today
            </button>
            <button variant="contained" color="primary">
              This Week
            </button>
            <button variant="contained" color="primary">
              This Month
            </button>
          </div>
          <div className="leaderboard-top"></div>

          <LeaderboardBest user={user} orientation={left} />
          <LeaderboardBest user={user} orientation={middle} />
          <LeaderboardBest user={user} orientation={right} />

          <LeaderboardCard user={user} />
        </>
      ) : (
        loading
      )}
    </>
  );
}

export default Leaderboard;
