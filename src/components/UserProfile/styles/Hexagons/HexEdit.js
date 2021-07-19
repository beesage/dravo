import React from "react";

import handleHeader from "../../../Header/Functions/HandleHeader";

export default function HexEdit() {
	const { handleEditProfile } = handleHeader();

	return (
		<>
			<div className="hex-edit ribbon-outset ">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<p className="edit-profile" onClick={handleEditProfile}>
						Edit Profile
					</p>
				</div>
			</div>
		</>
	);
}
