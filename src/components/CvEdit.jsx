import "../App.css";
import GeneralInfo from "./form components/GeneralInfo";
import EducationInfo from "./form components/EducationInfo";
import ExperienceInfo from "./form components/ExperienceInfo";
import Skills from "./form components/Skills";

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
			<Skills />
		</div>
	);
};

export default CvEdit;
