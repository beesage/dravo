import React from "react";
import { animated, useSpring } from "react-spring";
import handleHeader from "../../../Header/Functions/HandleHeader";

export default function HexEdit() {
  const { handleEditProfile } = handleHeader();

  const userFadeInEdit = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,

    config: {
      duration: 1000,
    },
  });

  return (
    <>
      <animated.div style={userFadeInEdit} className="hex-edit ribbon-outset ">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="edit-profile" onClick={handleEditProfile}>
            Edit Profile
          </p>
        </div>
      </animated.div>
    </>
  );
}
