import SignUpForm from "../../componets/signup-form/signup-form-componenet";
import SignInForm from "../../componets/sign-in-form/sign-in-form-componenet";

import "./authentication.styles.scss";

const Authentication = () => {
	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
