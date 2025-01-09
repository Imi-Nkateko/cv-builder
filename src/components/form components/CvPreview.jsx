import "./CvPreview.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const CvPreview = ({
	generalData,
	educationdata,
	experienceData,
	onEduDelete,
	onExpDelete,
}) =>  { const handleDownloadPDF = () => {
    const input = document.getElementById('resume-pdf'); 
    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("{generalData.firstName}.pdf"); 
      // Specify the name of the downloaded PDF file
    });}
	return (
		<main>
			<div className="page" id="resume-pdf">
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
				<section className="">
					<h2>Summary</h2>
					<p className="about">{generalData.about}</p>

					<h2>Education</h2>
					<div className="preview">
						{educationdata.map((educationEntry, index) => (
							<div key={index} className="educationEntry">
								<div className="entryContainer">
									<h3>{educationEntry.schoolName} </h3>
									<p>
										<strong>{educationEntry.degree}</strong>
									</p>
									<p>Start Date: {educationEntry.eduStartDate}</p>
									<p>End date Date: {educationEntry.eduEndDate}</p>
								</div>

								<button className="deletbtn" onClick={() => onEduDelete(index)}>
									X
								</button>
							</div>
						))}
					</div>
					<h2>Experience</h2>
					<div className="preview">
						{experienceData.map((experienceEntry, index) => (
							<div key={index} className="experienceEntry">
								<div className="entryContainer">
									<h3>{experienceEntry.companyName}</h3>
									<p>
										<strong>{experienceEntry.title}</strong>
									</p>
									<p>Start Date: {experienceEntry.expStartDate}</p>
									<p>End Date {experienceEntry.expEndDate}</p>
									<p>{experienceEntry.jobDescription}</p>
								</div>

								<button className="deletbtn" onClick={() => onExpDelete(index)}>
									X
								</button>
							</div>
						))}
					</div>
				</section>
			</div>
			<button onClick={handleDownloadPDF}>Save Pdf</button>
		</main>
	);
};

export default CvPreview;
