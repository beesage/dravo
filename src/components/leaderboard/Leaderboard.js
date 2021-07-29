import React from "react";
import { useContext, useState } from "react";
import { animated } from "react-spring";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import InfiniteScroll from "react-infinite-scroll-component";
import LeaderboardFunction from "./LeaderboardFunction";
import APIContext from "../../Context/APIContext";
import lbcrown from "../../assets/crown.png";
import "./leaderboard.css";

function Leaderboard({ loading, handleDays }) {
  const { user } = useContext(APIContext);
  const { lbMoreData, lbList, fadeIn, fadeIn2, theEnd } = LeaderboardFunction();

  let lbTop = user.slice(0, 3);

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

  return (
    <>
      <animated.div
        style={fadeIn}
        className="lb-honeycomb"
        id="lb-honeycomb-left"
      >
        <span></span>
      </animated.div>
      <animated.div
        style={fadeIn}
        className="lb-honeycomb"
        id="lb-honeycomb-middle"
      >
        <span></span>
      </animated.div>
      <animated.div
        style={fadeIn}
        className="lb-honeycomb"
        id="lb-honeycomb-right"
      >
        <span></span>
      </animated.div>
      <animated.div
        style={fadeIn}
        className="lb-triangle"
        id="lb-triangle-left"
      >
        <div
          onClick={() => handleDays("7")}
          className="lb-triangle-text"
          id="lb-triangle-transform"
        >
          This Week
        </div>
      </animated.div>
      <animated.div
        style={fadeIn}
        onClick={() => handleDays("30")}
        className="lb-triangle"
        id="lb-triangle-center"
      >
        <div className="lb-triangle-text" id="lb-triangle-rotate-text">
          This Month
        </div>
      </animated.div>
      <animated.div
        style={fadeIn}
        onClick={() => handleDays("5000")}
        className="lb-triangle"
        id="lb-triangle-right"
      >
        <div className="lb-triangle-text" id="lb-triangle-transform">
          All Time
        </div>
      </animated.div>
      <div className="lb-button">
        <div className="multi-button">
          <button onClick={() => handleDays("1")}>Today</button>
          <button onClick={() => handleDays("7")}>Week</button>
          <button onClick={() => handleDays("30")}>Month</button>
          <button onClick={() => handleDays("5000")}>All Time</button>
        </div>
      </div>

      {user.length > 0 ? (
        <>
          <div className="leaderboard-top"></div>

          <LeaderboardBest user={lbTop[1]} orientation={left} rank={2} />

          <LeaderboardBest user={lbTop[0]} orientation={middle} rank={1} />
          <LeaderboardBest user={lbTop[2]} orientation={right} rank={3} />

          <div className="lb-all">
            <InfiniteScroll
              dataLength={user.length}
              next={lbMoreData}
              hasMore={theEnd}
              loader={<h4>Loading...</h4>}
            >
              {lbList.map((user, index) => (
                <div key={index}>
                  <animated.div style={fadeIn2}>
                    <LeaderboardCard user={user} index={index} />
                  </animated.div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </>
      ) : (
        <>
          <div className="leaderboard-top"></div>
          <div className="lb-all">
            <h5>
              No Users with Weight Delta available for this period of time.
            </h5>
          </div>
        </>
      )}
    </>
  );
}

export default Leaderboard;
