import React from "react";

import "./UserProfile-Header.css";

export default function UserProfile({ user, loading }) {
	return (
		<div className="user-container">
			<div className="user-profile">
				<div className="user-info">
					{user.length > 0 ? (
						<>
							<img className="profile-pic" src={user[0].profilepic} />
							<p className="username">{user[0].beekeeper}</p>
							<p className="user-location">{user[0].location}</p>
						</>
					) : (
						loading
					)}
				</div>
			</div>
		</div>
	);
}
