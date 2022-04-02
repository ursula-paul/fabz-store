import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation-styles.scss";
import imgCrown from "../../assets/crown(1).svg";

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<img src={imgCrown} className="logo" alt="crown logo" />
				</Link>

				<div className="nav-links-container">
					<Link className="nav-link" to="shop">
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
