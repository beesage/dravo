import React from "react";
import Avatar from "@material-ui/core/Avatar";

function LeaderboardCard({ user }) {
  return (
    <div className="lb-all">
      <div className="hexagon ribbon-outset border">
        <Avatar alt={user[1].beekeeper} src={user[1].profilepic} />
        {user[1].beekeeper} {user[1].location} 3.12
      </div>
    </div>
  );
}

export default LeaderboardCard;
