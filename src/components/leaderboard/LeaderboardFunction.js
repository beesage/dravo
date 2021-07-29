import React from "react";
import { useState, useContext } from "react";
import { useSpring } from "react-spring";
import APIContext from "../../Context/APIContext";

function LeaderboardFunction() {
  const { user } = useContext(APIContext);
  const [lbList, setLbList] = useState(user.slice(3, 13));
  const [theEnd, setTheEnd] = useState(true);
  const [lbCounter, setLbCounter] = useState({
    sliceStart: 13,
    sliceEnd: 23,
  });

  /**
   * lbMoreData slices and concatenates data for the Infinite Scrolling Component
   * <p>
   * InfiniteScroll uses this function to expand its infinite scroll feature.
   * This function updates the state lbList with new data from the state user. It uses
   * the previous state from lbList and concenates it with a sliced version of the state user.
   * The arguments for this slice method are provided by the lbCounter State. After concatenating
   * the two arrays, the setLbList function is used to update the lbList state.
   * Afterwards the value of both objects in the State lbCounter (sliceEnd and sliceStart) are being
   * increased by 10, preparing for the next time the InfiniteScroll Component will call the function.
   *
   * An if statement compares if the length of the second argument of lbCounter is equal or bigger than
   * the overall length of the array in the state user. if so, the state theEnd will be set to false.
   * This boolean value is used by the Infinite Scroll Component, to identify if we are
   * at the end of the provided data and the function lbMoreData doesn't have to be called again.
   *
   * @author Lukas Kreibig
   */

  const lbMoreData = () => {
    setLbList((prevState) =>
      prevState.concat(user.slice(lbCounter.sliceStart, lbCounter.sliceEnd))
    );
    setLbCounter((lbCounter.sliceStart += 10), (lbCounter.sliceEnd += 10));
    if (lbCounter.sliceEnd >= user.length) {
      setTheEnd(false);
      return;
    }
  };

  /**
   * fadeIn / useSpring uses the npm module react-spring to fade in the mapped out leaderboard list
   * <p>
   * the function uses react-spring (https://react-spring.io/) options as an argument. in this case
   * it will fade from opacity zero to opacity one in 1000ms and will start 100ms after the page
   * is loaded. Those options are saved in the variable fadeIn which is then exported in LeaderboardFunction.js
   * It is imported in Leaderboard.js and passed as aprop ro the the useSprings <animated.div> component.
   * There it is implemented when rendering out the Leaderboard List.
   *
   * @author Lukas Kreibig
   * @param {options} react-spring prop-options for animations are defined (https://react-spring.io/common/props)
   */

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 0,

    config: {
      duration: 1000,
    },
  });

  const fadeIn2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,

    config: {
      duration: 1000,
    },
  });

  return {
    lbList,
    theEnd,
    fadeIn,
    fadeIn2,
    lbMoreData,
  };
}

export default LeaderboardFunction;
