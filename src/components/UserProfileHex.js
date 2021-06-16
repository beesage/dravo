import React from "react";

import { Icons } from "./Icons";

export default function UserProfileHex({ user }) {
	return (
		<div className="us-hex">
			{Icons.map((icons) => (
				<img src={icons.src} />
			))}
		</div>
	);
}
