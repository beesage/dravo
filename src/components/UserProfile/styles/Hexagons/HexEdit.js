import React, { useState } from "react";

import handleHeader from "../../../Header/Functions/HandleHeader";

export default function HexEdit() {
	const [isEditProfile, setisEditProfile] = useState(false);
	return (
		<>
			<div className="hex-edit ribbon-outset ">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<p
						className="edit-profile"
						onClick={() => handleHeader(setisEditProfile(!isEditProfile))}
					>
						Edit Profile
					</p>
				</div>
			</div>
		</>
	);
}
