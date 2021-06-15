import React from "react";

import "./UserProfile-Header.css";

export default function UserProfile({ user, loading }) {
	return (
		<div className="user-container">
			<div className="user-info">
				{user.length > 0 ? <p>{user[0].beekeeper}</p> : loading}
			</div>
		</div>
	);
}
