import React from "react";
import css from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={css.navbar}>
			<p className={css.logo}>LOGO</p>
			<ul className={css.navbar__list}>
				<li className={css.navbar__item}>
					<a href="#Home" className={css.navbar__link}>
						Home
					</a>
				</li>
				<li className={css.navbar__item}>
					<a href="#About" className={css.navbar__link}>
						About
					</a>
				</li>
				<li className={css.navbar__item}>
					<a href="#Contact" className={css.navbar__link}>
						Contact
					</a>
				</li>
				<li className={css.navbar__item}>
					<a href="#Images" className={css.navbar__link}>
						Images
					</a>
				</li>
			</ul>
		</nav>
	);
}
