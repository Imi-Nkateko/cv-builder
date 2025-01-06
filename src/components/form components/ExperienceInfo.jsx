import Input from "./Input";

const ExperienceInfo = () => {
  return (
		<div className="educationInfo">
			<div className="head">
				<h2>
					<span>2</span>Experience Information
				</h2>
			</div>
			<form action="" className="experienceInfoForm">
				<label htmlFor="companyName">
					Company Name
					<Input />
				</label>
				<label htmlFor="title">
					Title
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
				<label htmlFor="jobDescription">
                    About Job
					<textarea name="jobDescription" id=""></textarea>
				</label>
			</form>
		</div>
	);
}

export default ExperienceInfo
