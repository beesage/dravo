import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import { makeStyles } from "@material-ui/core/styles";

function Leaderboard({ user, loading }) {
  const left = "lb-pic-left";
  const big = "lb-pic-big";
  const right = "lb-pic-right";

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
          <LeaderboardBest user={user} orientation={big} />
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
