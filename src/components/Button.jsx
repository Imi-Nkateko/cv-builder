import PropTypes from "prop-types";


const Button = ({ title }) => {
	return <button>{title}</button>;
};

Button.propTypes = {
	title: PropTypes.string.isRequired, // Ensures 'title' is a required string
};

export default Button;
