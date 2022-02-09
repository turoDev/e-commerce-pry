import React from "react";

export default function ImageSVG(props) {
	return (
		<svg
			className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
			width="800"
			height="500"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label={"Placeholder: " + props.title}
			preserveAspectRatio="xMidYMid slice"
			focusable="false"
		>
			<title>Placeholder</title>
			<rect width="100%" height="100%" fill="#777"></rect>
			<text x="50%" y="50%" fill="#333" dx="-2em" dy=".5em">
				{props.title}
			</text>
		</svg>
	);
}
