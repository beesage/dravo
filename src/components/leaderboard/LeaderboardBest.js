import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function LeaderboardBest({ user, orientation, rank }) {
  return (
    <div className="lb-top-general" id={orientation.divprop}>
      <img className={orientation.lbicon} src={orientation.lbiconlink} />
      <img
        className="lb-top-pic"
        id={orientation.pic}
        alt={user.username}
        src={user.profile_picture}
      />
      {user.username}
      <div className="lb-top-location">{user.region}</div>
      <div className="lb-top-location">{user.country}</div>
      <div className="lb-top-wd">{user.average_wd}</div>
      <div className="lb-top-rank">
        {rank} <ArrowDropUpIcon style={{ fill: "green" }} />
      </div>
    </div>
  );
}

export default LeaderboardBest;
