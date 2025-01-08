import Input from "./Input";
import "./GeneralInfo.css";

const EducationInfo = ({ handleSubmit, handleChangeEdu }) => {
	return (
		<div action="" className="educationInfoForm">
			<div className="head">
				<h2>Education Information</h2>
			</div>
			<form action="" onSubmit={handleSubmit} className="educationInfo">
				<label htmlFor="schoolName">
					School Name
					<Input name={"schoolName"} onChange={handleChangeEdu} required />
				</label>
				<label htmlFor="title">
					Degree, Institution, Title
					<Input name={"degree"} onChange={handleChangeEdu} required />
				</label>
				<label htmlFor="startDate">
					Start Date
					<Input
						name={"eduStartDate"}
						onChange={handleChangeEdu}
						type={"date"}
						required
					/>
				</label>
				<label htmlFor="endDate">
					End Date
					<Input name={"eduEndDate"} onChange={handleChangeEdu} type={"date"} />
				</label>
				<button>Add Education</button>
			</form>
		</div>
	);
};

export default EducationInfo;
