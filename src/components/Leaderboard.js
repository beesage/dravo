import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

function Leaderboard({ user }) {
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
          <img
            className="lb-top-pic"
            id="lb-pic-left"
            alt={user[3].beekeeper}
            src={user[3].profilepic}
          />
          <img
            className="lb-top-pic"
            id="lb-pic-big"
            alt={user[2].beekeeper}
            src={user[2].profilepic}
          />
          <img
            className="lb-top-pic"
            id="lb-pic-right"
            alt={user[4].beekeeper}
            src={user[4].profilepic}
          />
          <LeaderboardCard user={user} />
        </>
      ) : (
        loading
      )}
    </>
  );
}

export default Leaderboard;
