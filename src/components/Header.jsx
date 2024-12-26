import "./styles.css"
import Button from "./Button";

const Header = () => {
	return (
		<header>
			<h1>Cv Builder:</h1>
			<div className="btn-container">
				<Button title={"Cv Edit"} />
				<Button title={"Preview Cv"} />
				<Button title={"Example Cv"} />
			</div>
		</header>
	);
};

export default Header;
