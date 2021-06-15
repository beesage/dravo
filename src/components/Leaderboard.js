import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import Avatar from "@material-ui/core/Avatar";

function Leaderboard({ user }) {
  return (
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
      <div className="lb-best">
        <Avatar alt={user[0].beekeeper} src={user[0].profilepic} />
      </div>
      <LeaderboardCard user={user} />
    </>
  );
}

export default Leaderboard;
