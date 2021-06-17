import React from "react";
import Avatar from "@material-ui/core/Avatar";

function LeaderboardCard({ user }) {
  return (
    <>
      <div className="hexagon ribbon-outset border">
        <img id="lb-pic-small" alt={user.beekeeper} src={user.profilepic} />
        {user.beekeeper} {user.location} {user.weightdelta}
      </div>
    </>
  );
}

export default LeaderboardCard;
