import React from "react";
import css from "./StartPage.module.css";
import Navbar from "../Navbar/Navbar";

export default function StartPage() {
	return (
		<div className={css.startPage__wrapper}>
			<Navbar />
			<div className={css.startPage__content}>
				<div className={css.slogan}>
                    <p>What</p>
                    <p>about</p>
                    <p>you?</p>
                </div>
			</div>
		</div>
	);
}
