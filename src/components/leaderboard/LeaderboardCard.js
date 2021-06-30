import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function LeaderboardCard({ user, index }) {
  return (
    <div className="lb-card-wrapper">
      <div className="lb-card-rank">
        {index + 4}
        <ArrowDropUpIcon style={{ fill: "green" }} />
      </div>
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
    </div>
  );
}

export default LeaderboardCard;
