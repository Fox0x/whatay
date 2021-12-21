import React from "react";
import css from "./AboutPage.module.css";

export default function AboutPage() {
	return (
		<div className={css.aboutPage__wrapper} id="About">
			<div className={css.aboutPage__content}>
				<div className={css.textcols}>
					<div className={css.col}>
                        <h2>First column</h2>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolorum omnis eaque quos amet itaque quibusdam
						corporis laboriosam ad, est ducimus deleniti reiciendis
						quisquam accusamus sed vero, ex necessitatibus tempore
						nam!
                        <br/>
                         Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Similique perspiciatis fugit dolores doloribus
						maxime inventore nisi odio. Reiciendis consequatur
						maiores, distinctio aut fugit tempore obcaecati odio
						accusantium similique quidem a!
					</div>
					<div className={css.col}>
                        <h2>Second column</h2>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolorum omnis eaque quos amet itaque quibusdam
						corporis laboriosam ad, est ducimus deleniti reiciendis
						quisquam accusamus sed vero, ex necessitatibus tempore
						nam!
					</div>
					<div className={css.col}>
                        <h2>Third column</h2>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolorum omnis eaque quos amet itaque quibusdam
						corporis laboriosam ad, est ducimus deleniti reiciendis
						quisquam accusamus sed vero, ex necessitatibus tempore
						nam!
					</div>
				</div>
			</div>
		</div>
	);
}
