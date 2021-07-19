import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";

export default function HexBio() {
	const { user } = useContext(APIContext);
	return (
		<>
			<div className="hex-bio ribbon-outset border">
				<p style={{ color: "white" }}>{user[0].bio}</p>
			</div>
		</>
	);
}
