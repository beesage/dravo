import React from "react";

export default function UserProfile({ user, loading }) {
	return <div>{user.length > 0 ? <p>{user[0].beekeeper}</p> : loading}</div>;
}
