import "./form-input-component.scss";

const FormInput = ({ label, inputOptions }) => {
	// can be repalce with otherProps
	return (
		<div className="group">
			<input className="form-input" {...inputOptions} />
			{label && (
				<label
					className={`${
						inputOptions.value.length ? "shrink" : ""
					} form-input-label `}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
