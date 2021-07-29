import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";

import APIContext from "../../Context/APIContext";

import Hex from "./styles/Hexagons/Hex";
import HexData from "./styles/Hexagons/HexData";
import HexBio from "./styles/Hexagons/HexBio";
import HexEdit from "./styles/Hexagons/HexEdit";

import "./styles/UserProfile.css";
import "./styles/Hexagons/HexStyles.css";
import { Icons } from "./styles/Icons";
import { FaMedal } from "react-icons/fa";

export default function UserProfile() {
  const userFadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 0,

    config: {
      duration: 1000,
    },
  });

  const userFadeIn2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,

    config: {
      duration: 1000,
    },
  });

  const userFadeIn3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,

    config: {
      duration: 1000,
    },
  });

  const { user } = useContext(APIContext);
  return (
    <div className="user-container">
      {user.length > 0 ? (
        <>
          <animated.div style={userFadeIn} className="user-profile">
            <p className="user-rank">{user[0].wd_rank}</p>
            <FaMedal className="medal" />
            <div className="user-info">
              <div className="hex-profile ribbon-outset border">
                <img alt="" src={user[0].profile_picture} className="avatar" />
              </div>
              <p className="username">{user[0].username}</p>
              <p className="user-location">{user[0].region}</p>
            </div>
          </animated.div>
          <animated.div style={userFadeIn} className="greeting-container">
            <p className="greeting-tablet">Welcome, {user[0].username}!</p>
          </animated.div>
          <animated.div style={userFadeIn} className="bio-container">
            <HexBio user={user} />
          </animated.div>
          <NavLink
            to="/settings"
            style={{
              gridColumn: "1/2",
              gridRow: "3",
              marginTop: "-7.5rem",
              marginLeft: "1.5rem",
              textDecoration: "none",
            }}
          >
            <HexEdit />
          </NavLink>
          <animated.div style={userFadeIn2} className="all-us-hex">
            {Icons.map((icons, index) => (
              <Hex icons={icons} key={index} />
            ))}
          </animated.div>
          <animated.div style={userFadeIn3} className="all-us-b-hex">
            <HexData />
          </animated.div>
        </>
      ) : (
        false
      )}
    </div>
  );
}
