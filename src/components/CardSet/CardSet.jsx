import React from "react";
import Card from "../Card/Card";
import css from "./CardSet.module.css";

export default function CardSet() {
	return (
		<div className={css.cardSet__wrapper} id="Cards">
			<Card
				backgroundImg={
					"https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
				}
				title={"New destinations for 2020"}
				diamondTitle={"Test"}
			/>
			<Card
				backgroundImg={
					"https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
				}
				title={"Experiences Away From Crowd"}
				diamondTitle={"My"}
			/>
			<Card
				backgroundImg={
					"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8"
				}
				title={"The world's most extraordinary places"}
				diamondTitle={"Btns"}
			/>
			<Card
				backgroundImg={
					"https://images.unsplash.com/photo-1489549132488-d00b7eee80f1"
				}
				title={"Your health is matter"}
				diamondTitle={"❤️"}
			/>
		</div>
	);
}
