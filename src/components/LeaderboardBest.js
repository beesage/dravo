import React from "react";

function LeaderboardBest({ user, orientation }) {
  return (
    <div id={orientation.divprop}>
      <img
        className="lb-top-pic"
        id={orientation.pic}
        alt={user[2].beekeeper}
        src={user[2].profilepic}
      />
    </div>
  );
}

export default LeaderboardBest;
