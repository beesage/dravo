import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";

export default function HexBio() {
	const { user } = useContext(APIContext);
	return (
		<>
			<div className="bio-text-container">
				<p className="bio-text">{user[0].bio}</p>
			</div>
			<div className="hex-bio ribbon-outset border"></div>
		</>
	);
}
