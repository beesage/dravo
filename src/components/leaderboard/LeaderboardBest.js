import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RemoveIcon from "@material-ui/icons/Remove";
import LeaderboardFunction from "./LeaderboardFunction";
import { animated } from "react-spring";

function LeaderboardBest({ user, orientation }) {
  const { fadeIn } = LeaderboardFunction();
  return (
    <animated.div
      style={fadeIn}
      className="lb-top-general"
      id={orientation.divprop}
    >
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
        {user.wd_rank_before ? (
          user.wd_rank === user.wd_rank_before ? (
            <RemoveIcon style={{ fill: "#314e52", width: "15px" }} />
          ) : user.wd_rank < user.wd_rank_before ? (
            <ArrowDropUpIcon style={{ fill: "green" }} />
          ) : (
            <ArrowDropDownIcon style={{ fill: "red" }} />
          )
        ) : (
          <ArrowDropDownIcon style={{ fill: "transparent" }} />
        )}
      </div>
    </animated.div>
  );
}

export default LeaderboardBest;
