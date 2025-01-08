import "./CvPreview.css";


const CvPreview = ({generalData, educationdata, experienceData, onEduDelete, onExpDelete}) => {
	
	return (
		<div className="page">
			<div className="general-info">
				<h1>{generalData.firstName + " " + generalData.lastName}</h1>

				<p className="profession">{generalData.profession}</p>
				<p>{generalData.address}</p>
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
					<p>{generalData.about}</p>

					<div className="preview">
						<h3>Education Preview</h3>
						{educationdata.map((educationEntry, index) => (
							<div key={index} className="educationEntry">
								<p>
									<strong>School Name:</strong> {educationEntry.schoolName}
								</p>
								<p>
									<strong>Degree:</strong> {educationEntry.degree}
								</p>
								<p>
									<strong>Start Date:</strong> {educationEntry.eduStartDate}
								</p>
								<p>
									<strong>End Date:</strong> {educationEntry.eduEndDate}
								</p>
								<button onClick={() => onEduDelete(index)}>Delete</button>
								<hr />
							</div>
						))}
					</div>
					<h3>Experience</h3>
					{experienceData.map((experienceEntry, index) => (
						<div key={index} className="experienceEntry">
							<h4>{experienceEntry.companyName}</h4>
							<p>
								<strong>{experienceEntry.title}</strong>
							</p>
							<p>
								<strong>{experienceEntry.expStartDate}</strong>
								<p>
									<strong>{experienceEntry.expEndDate}</strong>
								</p>
								<p>
									<strong>{experienceEntry.jobDescription}</strong>
								</p>
							</p>
							<button onClick={() => onExpDelete(index)}>Delete</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default CvPreview;
