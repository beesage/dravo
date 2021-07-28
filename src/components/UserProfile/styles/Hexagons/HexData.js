import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";

export default function HexData() {
	const { user } = useContext(APIContext);

	return (
		<>
			<div className="us-b-hex ribbon-outset border">
				<p className="data-display">{user[0].experience}</p>
			</div>
			<div className="us-b-hex ribbon-outset border">
				<p className="data-display">{user[0].beehives}</p>
			</div>
			<div className="us-b-hex ribbon-outset border">
				<p className="data-display">{user[0].apiaries}</p>
			</div>
			<div className="us-b-hex ribbon-outset border">
				<p className="data-display">{user[0].region}</p>
			</div>
		</>
	);
}
