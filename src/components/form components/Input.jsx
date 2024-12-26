import PropTypes from "prop-types";

const Input = ({ placeholder }) => {
	return <input type="text" placeholder={placeholder} />;
};
Input.propTypes = {
	placeholder: PropTypes.string.isRequired, // Ensures 'title' is a required string
};
export default Input;
