import "../App.css";
import GeneralInfo from "./form components/GeneralInfo";
import EducationInfo from "./form components/EducationInfo";
import ExperienceInfo from "./form components/ExperienceInfo";


const CvEdit = ({
	onChange,
	handleSubmit,
	handleChangeEdu,
	handleChangeExp,
	handleExpSubmit,
}) => {
	return (
		<div className="cvEdit">
			<GeneralInfo onChange={onChange} />
			<EducationInfo
				handleSubmit={handleSubmit}
				handleChangeEdu={handleChangeEdu}
			/>
			<ExperienceInfo
				handleChangeExp={handleChangeExp}
				handleExpSubmit={handleExpSubmit}
			/>
			
		</div>
	);
};

export default CvEdit;
