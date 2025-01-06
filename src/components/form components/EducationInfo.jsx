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
			<div action="" className="educationInfoForm">
				<form action="">
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
				<button>Add Education</button>
			</div>
		</div>
	);
};

export default EducationInfo;
