import "./CvPreview.css";
import { useLocation } from "react-router-dom";

const CvPreview = () => {
	const location = useLocation();
	const { data } = location.state || {}; // Retrieve passed state
	return (
		<div className="page">
			<div className="genaral-info">
				<h1>
					{data?.firstName} {data?.lastName}
				</h1>

				<p className="profession">{data?.profession}</p>

				<div className="contact">
					<p>{data?.linkedIn}</p>
					<p>{data?.portfolio}</p>
					<p>{data?.email}</p>
					<p>{data?.phone}</p>
					<p>{data?.address}</p>
				</div>
			</div>
			<section className="cv-info">
				<div className="left-container">
					<h2>Summary</h2>
					<p>{data?.summary}</p>
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
