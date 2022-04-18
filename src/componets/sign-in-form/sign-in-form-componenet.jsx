import { useState } from "react";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button.componet";

//import { UserContext } from "../../Contexts/user.context";

import {
	SignInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";

import "./sign-in-form-styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	// console.log(formFields);

	//const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const SignInWithGoogle = async () => {
		await SignInWithGooglePopup();
		//setCurrentUser(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(email, password);

		try {
			const user = await signInAuthUserWithEmailAndPassword(email, password);
			//console.log(user);

			resetFormFields();
			//setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				// case "auth/user-not-found":
				// 	alert("no user associated with this email");
				// 	break;
				default:
				//console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and pasword</span>
			<form onSubmit={handleSubmit}>
				{/* <FormInput
					label="Display Name:"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/> */}

				<FormInput
					label="Email:"
					inputOptions={{
						type: "email",
						required: true,
						onChange: handleChange,
						name: "email",
						value: email,
					}}
				/>

				<FormInput
					label="Password:"
					inputOptions={{
						type: "password",
						required: true,
						onChange: handleChange,
						name: "password",
						value: password,
					}}
				/>

				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button buttonType={"google"} onClick={SignInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
