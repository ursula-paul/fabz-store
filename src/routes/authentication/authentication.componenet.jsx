import {
	SignInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";

import SignUpForm from "../../componets/signup-form/signup-form-componenet";

const Authentication = () => {
	const logGoogleUser = async () => {
		const { user } = await SignInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>signin page</h1>
			<button onClick={logGoogleUser}>Sign with Google Popup</button>

			<SignUpForm />
		</div>
	);
};

export default Authentication;
