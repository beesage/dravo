import React from "react";
import Avatar from "@material-ui/core/Avatar";

function LeaderboardCard({ user }) {
  return (
    <>
      <div className="hexagon ribbon-outset border">
        <div className="lb-card-flex-container">
          <img id="lb-pic-small" alt={user.beekeeper} src={user.profilepic} />
          <div className="lb-card-usertext">
            {user.beekeeper}
            <div className="lb-top-location"> {user.location} </div>
          </div>
          <div className="lb-top-wd">{user.weightdelta}</div>
        </div>
      </div>
    </>
  );
}

export default LeaderboardCard;
