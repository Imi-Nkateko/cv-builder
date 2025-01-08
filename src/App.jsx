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

	const [educationInfo, SetEducationInfo] = useState({
		schoolName: "",
		degree: "",
		eduStartDate: "",
		eduEndDate: "",
	});

	const [experienceInfo, setExperienceInfo] = useState({
		companyName: "",
		title: "",
		expStartdate: "",
		expEndDate: "",
		jobDescription: ""
	})
	const [experienceList, setExperienceList] = useState([])

	const [educationList, setEducationList] = useState([]);

	const handleChangeEdu = (e) => {
		const { name, value } = e.target;
		SetEducationInfo((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleChangeExp = (e) => {
		const {name, value} = e.target;
		setExperienceInfo((prevExpData) => ({
			...prevExpData,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setEducationList((prevList) => [...prevList, educationInfo]);

		SetEducationInfo({
			schoolName: "",
			degree: "",
			eduStartDate: "",
			eduEndDate: "",
		});
		e.target.reset();
	};

	const handleExpSubmit = (e) => {
		e.preventDefault();

		setExperienceList((prevList) => [...prevList, experienceInfo]);

		setExperienceInfo({
			schoolName: "",
			degree: "",
			eduStartDate: "",
			eduEndDate: "",
		});
		e.target.reset();
	};

	const handleChange = (field, value) => {
		setPersonInfo((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div>
			<Header />
			<div className="container">
				<CvEdit onChange={handleChange} handleSubmit={handleSubmit} handleChangeEdu={handleChangeEdu} handleChangeExp={handleChangeExp}  handleExpSubmit={handleExpSubmit}/>
				<CvPreview generalData={personInfo} educationdata={educationList} experienceData={experienceList} />
			</div>
		</div>
	);
};

export default App;
