import React from "react";
import css from "./Diamond.module.css";

export default function Diamond({ title }) {
	const [text] = React.useState(title || "text");

	return (
		<svg
			className={css.diamond}
			width="100"
			height="150"
			viewBox="0 0 100 150"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_b_2140_5399)">
				<path
					className={css.diamond__core}
					d="M50.0001 142.413C33.4894 117.599 22.0589 100.531 5.18529 75.0001L27.6834 41.2939L50.0001 7.58765L72.4983 41.2939L94.8149 75.0001L50.0001 142.413Z"
					fill="#919191"
					fillOpacity="0.2"
				/>
			</g>
			<path
				d="M25.5167 37.7781L25.5177 37.7766L50.0017 0.90139L74.6847 37.7766L74.6857 37.7781L99.3994 74.9994L49.9998 149.099C44.7811 141.278 40.0144 134.145 35.429 127.283C24.0773 110.295 13.8371 94.9709 0.600762 75.0014L25.5167 37.7781Z"
				stroke="#79655E"
				strokeWidth={2}
			/>
			<text
				x="50%"
				y="55%"
				textAnchor="middle"
				fill="#fff"
				fontSize="30"
				fontWeight="500">
				{text}
			</text>
			;
			<path
				d="M42 98.5H58M60 98.7L52.62 97M60 98.8L52.626 100"
				stroke="white"
				strokeWidth={2}
			/>
			<defs>
				<filter
					id="filter0_b_2140_5399"
					x="-14.8147"
					y="-12.4124"
					width="129.63"
					height="174.825"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImage" stdDeviation="10" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_2140_5399"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_2140_5399"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
}
