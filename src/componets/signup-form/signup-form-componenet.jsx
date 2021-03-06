import { useState } from "react";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button.componet";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";

//import { UserContext } from "../../Contexts/user.context";

import "./signup-form-styles.scss";
import { serverTimestamp } from "firebase/firestore";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	//const val = useContext(UserContext);

	//const { setCurrentUser } = useContext(UserContext);

	//console.log("hit");

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("password does not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
			console.log(user);
			//setCurrentUser(user);

			serverTimestamp(user);
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("cannont create user, user already in use ");
			} else {
				console.log("user creation encountered error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and pasword</span>
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
					label="Display Name:"
					inputOptions={{
						type: "text",
						required: true,
						onChange: handleChange,
						name: "displayName",
						value: displayName,
					}}
				/>

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

				<FormInput
					label="Confirm Password:"
					inputOptions={{
						type: "password",
						required: true,
						onChange: handleChange,
						name: "confirmPassword",
						value: confirmPassword,
					}}
				/>

				<Button type="submit">Sign UP</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
