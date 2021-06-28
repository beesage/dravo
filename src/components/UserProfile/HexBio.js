import React from "react";

export default function HexBio({ user }) {
	return (
		<>
			<p className="greeting-tablet">Welcome, {user[0].beekeeper}!</p>
			<div className="hex-bio" />
		</>
	);
}
