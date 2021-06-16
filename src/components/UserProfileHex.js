import React from "react";

import { Icons } from "./Icons";

export default function UserProfileHex({ user }) {
	return (
		<>
			{Icons.map((icons, index) => (
				<div className="us-hex" key={index}>
					<img src={icons.src} />
				</div>
			))}
		</>
	);
}
