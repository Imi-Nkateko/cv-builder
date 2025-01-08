import PropTypes from "prop-types";

const Input = ({ placeholder, id,  onChange, name, type, required  }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			id={id}
			onChange={onChange}
			name={name}
			required={required}
		/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string.isRequired, // Ensures 'title' is a required string
};
export default Input;
