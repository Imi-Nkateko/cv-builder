import PropTypes from "prop-types";

const Input = ({ placeholder, id,  onChange, name }) => {
	return <input type="text" placeholder={placeholder} id={id}  onChange={onChange} name={name}/>;
};

Input.propTypes = {
	placeholder: PropTypes.string.isRequired, // Ensures 'title' is a required string
};
export default Input;
