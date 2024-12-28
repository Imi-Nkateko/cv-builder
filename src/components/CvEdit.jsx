import GeneralInfo from "./form components/GeneralInfo";


const CvEdit = ({setPersonInfo}) => {
	

	const handleChange = (field, value) => {
		setPersonInfo((prev) => ({ ...prev, [field]: value })); // Update specific field
	};
	return (
		<div>
			<GeneralInfo onChange={handleChange} />

		</div>
	);
};

export default CvEdit;
