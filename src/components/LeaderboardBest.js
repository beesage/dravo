import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function LeaderboardBest({ user, orientation, rank }) {
  return (
    <div className="lb-top-general" id={orientation.divprop}>
      <img
        className={orientation.lbicon}
        src={orientation.lbiconlink}
        alt="Icon"
      />
      <img
        className="lb-top-pic"
        id={orientation.pic}
        alt={user.beekeeper}
        src={user.profilepic}
      />
      {user.beekeeper}
      <div className="lb-top-location">{user.location}</div>
      <div className="lb-top-wd">{user.weightdelta}</div>
      <div className="lb-top-rank">
        {rank} <ArrowDropUpIcon style={{ fill: "green" }} />
      </div>
    </div>
  );
}

export default LeaderboardBest;
