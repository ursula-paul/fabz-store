import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation-styles.scss";

import imgCrown from "../../assets/crown(1).svg";

import { UserContext } from "../../Contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase-utils";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	//console.log(currentUser);
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<img src={imgCrown} className="logo" alt="crown logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link shop-link" to="/shop">
						SHOP
					</Link>

					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							{" "}
							SIGN OUT{" "}
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
