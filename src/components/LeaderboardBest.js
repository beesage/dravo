import React from "react";

function LeaderboardBest({ user, orientation }) {
  return (
    <div id={orientation}>
      <img
        className="lb-top-pic"
        id={orientation}
        alt={user[2].beekeeper}
        src={user[2].profilepic}
      />
    </div>
  );
}

export default LeaderboardBest;
