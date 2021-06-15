import React from "react";
import Button from "@material-ui/core/Button";
import LeaderboardCard from "./LeaderboardCard";

function Leaderboard({ user, beekeeper, location, profilepic, weightdelta }) {
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
      <div className="lb-best"></div>
      <LeaderboardCard {...user} />
      <LeaderboardCard {...user} />
    </>
  );
}

export default Leaderboard;
