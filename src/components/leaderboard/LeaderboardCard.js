import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RemoveIcon from "@material-ui/icons/Remove";

function LeaderboardCard({ user, index }) {
  return (
    <div className="lb-card-wrapper">
      <div className="lb-card-rank">
        {user.wd_rank_before ? (
          user.wd_rank === user.wd_rank_before ? (
            <RemoveIcon style={{ fill: "#314e52", width: "15px" }} />
          ) : user.wd_rank < user.wd_rank_before ? (
            <ArrowDropUpIcon style={{ fill: "green" }} />
          ) : (
            <ArrowDropDownIcon style={{ fill: "red" }} />
          )
        ) : null}
      </div>
      <div className="hexagon ribbon-outset border">
        <div className="lb-card-flex-container">
          <img
            id="lb-pic-small"
            alt={user.beekeeper}
            src={user.profile_picture}
          />
          <div className="lb-card-usertext">
            {user.username}
            <div className="lb-top-location">
              {user.region}, {user.country}
            </div>
          </div>
          <div className="lb-top-wd">{user.avg_wd}</div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardCard;
