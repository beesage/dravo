import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DragHandleIcon from "@material-ui/icons/DragHandle";

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
      <div className="lb-top-wd">{user.avg_wd}</div>
      <div className="lb-top-rank">
        {user.wd_rank === user.wd_rank_before ? (
          <DragHandleIcon style={{ fill: "black" }} />
        ) : user.wd_rank > user.wd_rank_before ? (
          <ArrowDropUpIcon style={{ fill: "green" }} />
        ) : (
          <ArrowDropDownIcon style={{ fill: "red" }} />
        )}
      </div>
    </div>
  );
}

export default LeaderboardBest;
