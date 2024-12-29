import "./styles.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Header = ({personInfo}) => {
	const navigate = useNavigate();

const handlePreviewClick = () => {
	navigate("/preview", { state: { data: personInfo } }); // Pass data via state
};

	return (
		<header>
			<h1>Cv Builder:</h1>
			<ul> <li>
				<Link to={"./editCv"}>Edit Cv</Link>
			</li>
				<li>
					<a href="./CvEdit.jsx">Edit Cv</a>
				</li>
				<li>
					<button onClick={handlePreviewClick}>Preview Cv</button>
				</li>
				<li>
					<button onClick={handlePreviewClick}>Preview Cv</button>
				</li>
			</ul>
		</header>
	);
};

export default Header;
