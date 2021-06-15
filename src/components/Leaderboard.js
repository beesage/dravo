import React from "react";
import Button from "@material-ui/core/Button";

function Leaderboard() {
  return (
    <>
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
      <div className="lb-best"></div>
      <div className="lb-all">
        <div className="hexagon ribbon-outset border"></div>
      </div>
    </>
  );
}

export default Leaderboard;
