import "../App.css";
import GeneralInfo from "./form components/GeneralInfo";
import EducationInfo from "./form components/EducationInfo";
import ExperienceInfo from "./form components/ExperienceInfo";
import Skills from "./form components/Skills";

const CvEdit = ({onChange}) => {
	return (
		<div className="cvEdit">
			<GeneralInfo onChange={onChange}/>
			<EducationInfo />
			<ExperienceInfo/>
			<Skills/>
		</div>
	);
};

export default CvEdit;
