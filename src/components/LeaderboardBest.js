import React from "react";

function LeaderboardBest({ user, orientation }) {
  return (
    <div className="lb-top-general" id={orientation.divprop}>
      <img
        className="lb-top-pic"
        id={orientation.pic}
        alt={user.beekeeper}
        src={user.profilepic}
      />
      {user.beekeeper}
      <div className="lb-top-location">{user.location}</div>
      <div className="lb-top-wd">{user.weightdelta}</div>
    </div>
  );
}

export default LeaderboardBest;
