import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";

export default function HexData() {
	const { user } = useContext(APIContext);
	return (
		<>
			<div className="us-b-hex ribbon-outset border">
				<p style={{ transform: "rotate(275deg)" }}>{user[0].experience}</p>
			</div>
		</>
	);
}
