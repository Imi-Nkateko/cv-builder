import PropTypes from "prop-types";


const Button = ({ title, onClick}) => {
	return <button onClick={onClick}>{title}</button>;
};

Button.propTypes = {
	title: PropTypes.string.isRequired, // Ensures 'title' is a required string
};

export default Button;
