import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";

function Leaderboard({ user, loading }) {
  const left = { divprop: "lb-top-left", pic: "lb-pic-middle" };
  const middle = { divprop: "lb-top-big", pic: "lb-pic-big" };
  const right = { divprop: "lb-top-right", pic: "lb-pic-middle" };

  return (
    <>
      {user.length > 0 ? (
        <>
          <div className="lb-navhex"></div>
          <div className="lb-button">
            <button variant="contained" color="primary">
              Today
            </button>
            <button variant="contained" color="primary">
              This Week
            </button>
            <button variant="contained" color="primary">
              This Month
            </button>
          </div>
          <div className="leaderboard-top"></div>
          <LeaderboardBest user={user[15]} orientation={left} />
          <LeaderboardBest user={user[12]} orientation={middle} />
          <LeaderboardBest user={user[10]} orientation={right} />

          <div className="lb-all">
            {user.map((user, index) => (
              <div key={index}>
                <LeaderboardCard user={user} />
              </div>
            ))}
          </div>
        </>
      ) : (
        loading
      )}
    </>
  );
}

export default Leaderboard;
