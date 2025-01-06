import "./App.css";
import Header from "./components/Header";
import CvEdit from "./components/CvEdit";
import CvPreview from "./components/form components/CvPreview";
import { useState } from "react";

const App = () => {
	const [personInfo, setPersonInfo] = useState({
		firstName: "",
		lastName: "",
		profession: "",
		address: "",
		linkedIn: "",
		email: "",
		portfolio: "",
		phone: "",
		about: "",
	});

	

	const handleChange = (field, value) => {
		setPersonInfo((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div>
			<Header />
			<div className="container">
				<CvEdit onChange={handleChange} />
				<CvPreview generalData={personInfo} />
			</div>
		</div>
	);
};

export default App;
