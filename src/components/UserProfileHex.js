import React from "react";

export default function UserProfileHex({ user, icons }) {
	return (
		<>
			<div className="us-hex">
				<img
					src={icons.src}
					style={{ transform: "rotate(270deg)", width: "120%" }}
				/>
			</div>
			<p className="icons-name">{icons.name}</p>

			{/* <div className="us-b-hex" /> */}
		</>
	);
}
