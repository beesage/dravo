import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import Avatar from "@material-ui/core/Avatar";

function Leaderboard({ beekeeper, location, profilepic, weightdelta }) {
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
        {" "}
        <Avatar alt={beekeeper} src={profilepic} />
      </div>
      <LeaderboardCard
        beekeeper={beekeeper}
        profilepic={profilepic}
        location={location}
      />
    </>
  );
}

export default Leaderboard;
