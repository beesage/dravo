import React from "react";

export default function Hex({ icons }) {
	return (
		<>
			<div className="us-hex">
				<img
					src={icons.src}
					style={{ transform: "rotate(270deg)", width: "120%" }}
				/>
			</div>
			<div className="tablet-position">
				<p className="icons-name">{icons.name}</p>
			</div>
		</>
	);
}
