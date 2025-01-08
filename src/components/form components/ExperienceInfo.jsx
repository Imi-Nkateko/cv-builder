import Input from "./Input";

const ExperienceInfo = ({ handleExpSubmit, handleChangeExp }) => {
	return (
		<div className="experienceInfoForm">
			<div className="head">
				<h2>Experience Information</h2>
			</div>
			<form action="" onSubmit={handleExpSubmit} className="expriencForm">
				<div className="experienceContainer">
					<label htmlFor="companyName">
						Company Name
						<Input name={"companyName"} onChange={handleChangeExp} />
					</label>
					<label htmlFor="title">
						Title
						<Input name={"title"} onChange={handleChangeExp} />
					</label>
					<label htmlFor="startDate">
						Start Date
						<Input name={"expStartDate"} onChange={handleChangeExp} />
					</label>
					<label htmlFor="endDate">
						End Date
						<Input name={"expEndDate"} onChange={handleChangeExp} />
					</label>
				</div>
				<label htmlFor="jobDescription">
					About Job
					<textarea
						name="jobDescription"
						onChange={handleChangeExp}
						id=""
						rows={"5"}
						cols={"33"}
					></textarea>
				</label>
				<button>Add Experience</button>
			</form>
		</div>
	);
};

export default ExperienceInfo;
