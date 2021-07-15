import React, { useContext } from "react";

import APIContext from "../../../../Context/APIContext";
import { Icons } from "../Icons";

export default function HexData() {
	const { user } = useContext(APIContext);
	return (
		<>
			<div className="us-b-hex ribbon-outset border" />
		</>
	);
}
