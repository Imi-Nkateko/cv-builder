import Input from "./Input";
import "./GeneralInfo.css";



const EducationInfo = () => {


	return (
		<div className="educationInfo">
			<div className="head">
				<h2>
					<span>2</span>Education Information
				</h2>
			</div>
			<button>Add Education</button>
			<form action="" className="educationInfoForm">
				<label htmlFor="schoolName">
					School Name
					<Input />
				</label>
				<label htmlFor="title">
					Degree, Institution, Title
					<Input />
				</label>
				<label htmlFor="startDate">
					Start Date
					<Input />
				</label>
				<label htmlFor="endDate">
					End Date
					<Input />
				</label>
			</form>
		</div>
	);
};

export default EducationInfo;
