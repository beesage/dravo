import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import Button from "@material-ui/core/Button";

function Leaderboard({ user, loading }) {
  const left = { divprop: "lb-top-left", pic: "lb-pic-middle" };
  const middle = { divprop: "lb-top-big", pic: "lb-pic-big" };
  const right = { divprop: "lb-top-right", pic: "lb-pic-middle" };

  console.log(
    user.sort((a, b) => parseFloat(b.weightdelta) - parseFloat(a.weightdelta))
  );

  return (
    <>
      {user.length > 0 ? (
        <>
          <div className="lb-button">
            <Button
              style={{
                textTransform: "none",
                fontSize: "10px",
                backgroundColor: "#314e52",
                color: "#f2a154",
                borderRadius: "0%",
              }}
              variant="containedSecondary"
            >
              Today
            </Button>

            <Button
              style={{
                textTransform: "none",
                fontSize: "10px",
                color: "#314e52",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0%",
              }}
              variant="none"
            >
              Week
            </Button>

            <Button
              style={{
                width: "100",
                textTransform: "none",
                fontSize: "10px",
                color: "#314e52",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0%",
              }}
              variant="none"
            >
              Month
            </Button>
            <Button
              style={{
                textTransform: "none",
                fontSize: "10px",
                color: "#314e52",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0%",
              }}
              variant="none"
            >
              All Time
            </Button>
          </div>

          <div className="leaderboard-top"></div>
          <LeaderboardBest user={user[1]} orientation={left} />
          <LeaderboardBest user={user[0]} orientation={middle} />
          <LeaderboardBest user={user[2]} orientation={right} />

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
