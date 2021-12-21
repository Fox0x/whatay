import React from "react";
import css from "./ImageSet.module.css";

export default function ImageSet() {
	return (
		<div className={css.imageSet_wrapper} id="Images">
			<div className={css.set}>
				<div className={css.side}>
					<span className={css.side__text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nisi assumenda, repudiandae ipsa unde sit
						doloribus dicta, quia nobis itaque animi non at
						exercitationem tempora iusto beatae autem quisquam eum
						ex!
					</span>
				</div>
				<img
					src="https://images.unsplash.com/photo-1617609577449-6ef7c0fc0495"
					alt="img1"
				/>
			</div>

			<div className={css.set}>
				<div className={css.side}>
                <span className={css.side__text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nisi assumenda, repudiandae ipsa unde sit
						doloribus dicta, quia nobis itaque animi non at
						exercitationem tempora iusto beatae autem quisquam eum
						ex!
					</span>
                </div>
				<img
					src="https://images.unsplash.com/photo-1637598094913-7e24488a4dfa"
					alt="img2"
				/>
			</div>

			<div className={css.set}>
				<div className={css.side}>
                <span className={css.side__text}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nisi assumenda, repudiandae ipsa unde sit
						doloribus dicta, quia nobis itaque animi non at
						exercitationem tempora iusto beatae autem quisquam eum
						ex!
					</span>
                </div>
				<img
					src="https://images.unsplash.com/photo-1631607312010-1f074ca94481"
					alt="img3"
				/>
			</div>
		</div>
	);
}
