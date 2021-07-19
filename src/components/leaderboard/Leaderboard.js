import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import Button from "@material-ui/core/Button";
import lbcrown from "../../assets/crown.png";
import "./leaderboard.css";

function Leaderboard({ user, loading, handleDays }) {
  const left = {
    divprop: "lb-top-left",
    pic: "lb-pic-middle",
    lbicon: null,
    lbiconlink: null,
  };
  const middle = {
    divprop: "lb-top-big",
    pic: "lb-pic-big",
    lbicon: "lb-icon-middle",
    lbiconlink: lbcrown,
  };
  const right = {
    divprop: "lb-top-right",
    pic: "lb-pic-middle",
    lbicon: null,
    lbiconlink: null,
  };

  let lbTop = user.slice(0, 3);
  let lbAll = user.slice(3);

  return (
    <>
      {user.length > 0 ? (
        <>
          <div className="lb-honeycomb" id="lb-honeycomb-left">
            <span></span>
          </div>
          <div className="lb-honeycomb" id="lb-honeycomb-middle">
            <span></span>
          </div>
          <div className="lb-honeycomb" id="lb-honeycomb-right">
            <span></span>
          </div>
          <div className="lb-triangle" id="lb-triangle-left">
            <div
              onClick={() => handleDays("7")}
              className="lb-triangle-text"
              id="lb-triangle-transform"
            >
              This Week
            </div>
          </div>
          <div
            onClick={() => handleDays("30")}
            className="lb-triangle"
            id="lb-triangle-center"
          >
            <div className="lb-triangle-text" id="lb-triangle-rotate-text">
              This Month
            </div>
          </div>
          <div
            onClick={() => handleDays("5000")}
            className="lb-triangle"
            id="lb-triangle-right"
          >
            <div className="lb-triangle-text" id="lb-triangle-transform">
              All Time
            </div>
          </div>

          <div className="lb-button">
            <div className="multi-button">
              <button onClick={() => handleDays("1")}>Today</button>
              <button onClick={() => handleDays("7")}>Week</button>
              <button onClick={() => handleDays("30")}>Month</button>
              <button onClick={() => handleDays("5000")}>All Time</button>
            </div>

            {/* <div>
              <Button onClick={() => handleDays("1")} style={buttonstyle}>
                Today
              </Button>
              <Button onClick={() => handleDays("7")} style={buttonstyle}>
                Week
              </Button>
              <Button onClick={() => handleDays("30")} style={buttonstyle}>
                Month
              </Button>
              <Button onClick={() => handleDays("5000")} style={buttonstyle}>
                All Time
              </Button>
            </div> */}

            {/* <button className="lb-topbutton" onClick={() => handleDays("1")}>
              Today
            </button>
            <button className="lb-topbutton" onClick={() => handleDays("7")}>
              Week
            </button>
            <button className="lb-topbutton" onClick={() => handleDays("30")}>
              Month
            </button>
            <button className="lb-topbutton" onClick={() => handleDays("5000")}>
              All-Time
            </button> */}
          </div>

          <div className="leaderboard-top"></div>
          <LeaderboardBest user={lbTop[1]} orientation={left} rank={2} />
          <LeaderboardBest user={lbTop[0]} orientation={middle} rank={1} />
          <LeaderboardBest user={lbTop[2]} orientation={right} rank={3} />

          <div className="lb-all">
            {lbAll.map((user, index) => (
              <div key={index}>
                <LeaderboardCard user={user} index={index} />
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
