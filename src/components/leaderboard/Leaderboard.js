import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardBest from "./LeaderboardBest";
import Button from "@material-ui/core/Button";
import lbcrown from "../../assets/crown.png";
import "./leaderboard.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { TheatersOutlined } from "@material-ui/icons";

function Leaderboard({ user, loading, handleDays }) {
  const [lbList, setLbList] = useState(user.slice(3, 13));
  const [theEnd, setTheEnd] = useState(true);
  const [lbCounter, setLbCounter] = useState({
    sliceStart: 13,
    sliceEnd: 23,
  });

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

  const lbMoreData = () => {
    if (lbList.length == user.length) {
      setTheEnd(false);
      console.log(theEnd);
      return;
    }
    setLbList((prevState) =>
      prevState.concat(user.slice(lbCounter.sliceStart, lbCounter.sliceEnd))
    );
    console.log(lbList);
    setLbCounter((lbCounter.sliceStart += 10), (lbCounter.sliceEnd += 10));
    console.log(theEnd);
    console.log(lbCounter);
    console.log(user.length);
    console.log(lbList.length);
  };

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
          </div>
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
                  <LeaderboardCard user={user} index={index} />
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </>
      ) : (
        loading
      )}
    </>
  );
}

export default Leaderboard;
