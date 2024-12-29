import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CvEdit from "./components/CvEdit";
import CvPreview from "./components/form components/CvPreview";
import ExampleCv from "./components/ExampleCv";


const App = () => {
	 const [personInfo, setPersonInfo] = useState({
			firstName: "ttt",
			lastName: "",
			profession: "",
			address: "",
			linkedIn: "",
			portfolio: "",
			email: "",
			phone: "",
			summary: "",
		});
	return (
		<Router>
			<Header personInfo={personInfo} />
			<Routes>
				<Route path="/ " element={<CvEdit setPersonInfo={setPersonInfo} />} />
				<Route
					path="/preview"
					element={<CvPreview personInfo={personInfo} />}
				/>
				<Route path="/example" element={<ExampleCv/>}/>
			</Routes>
		</Router>
	);
};

export default App;
