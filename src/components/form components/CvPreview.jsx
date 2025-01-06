import "./CvPreview.css";


const CvPreview = ({generalData}) => {

	return (
		<div className="page">
			<div className="general-info">
				<h1>{generalData.firstName + " " + generalData.lastName}</h1>

				<p className="profession">{generalData.profession}</p>

				<div className="contact">
					<p>{generalData.linkedIn}</p>
					<p>{generalData.email}</p>
					<p>{generalData.portfolio}</p>
					<p>{generalData.phone}</p>
				</div>
			</div>
			<section className="cv-info">
				<div className="left-container">
					<h2>Summary</h2>
					<p></p>
					<h2>Experience</h2>
					<h2>Education</h2>
				</div>
				<div className="right-container">
					<h2>Projects</h2>
					<h2>Skills</h2>
					<h2>Interests</h2>
				</div>
			</section>
		</div>
	);
};

export default CvPreview;
