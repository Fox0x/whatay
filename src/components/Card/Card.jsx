import React from "react";
import css from "./Card.module.css";
import Diamond from "../UI/Diamond/Diamond";

export default function Card({ backgroundImg, title, diamondTitle }) {
	const [newStyle] = React.useState(
		`linear-gradient(#00000080, #ffffff00 35%),
			url(${backgroundImg})`
	);

	return (
		<div className={css.card__wrapper}>
			<div
				className={css.card__content}
				style={{ backgroundImage: newStyle }}>
				<h2 className={css.card__title}>{title}</h2>
				<Diamond title={diamondTitle} />
			</div>
		</div>
	);
}
