import React from "react";
import Avatar from "@material-ui/core/Avatar";

function LeaderboardCard({ beekeeper, profilepic }) {
  return (
    <div className="lb-all">
      <div className="hexagon ribbon-outset border">
        <Avatar alt={beekeeper} src={profilepic} />
      </div>
    </div>
  );
}

export default LeaderboardCard;
