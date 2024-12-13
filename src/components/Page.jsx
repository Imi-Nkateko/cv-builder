import "./Page.css"

export const Page = () => {
  return (
		<div className="page">
			<section className="personalInfo">
				<h1>
					<em>First Name Last Name</em>
				</h1>
				<div className="contact">
					<p>123 your Address</p>
					<p>xxx-xxx-xxxx</p>
					<p>yourName@Emai.com</p>
					<p>yourlinkedIn.com</p>
				</div>
			</section>
			<section className="profile">
				<h2>About</h2>
				<p className="about">
					This is where you write what work you’d like to do and what motivates
					you. This is how you set the tone of your resume. Write what do you
					most want to the person reading your resume to know.{" "}
				</p>
			</section>
			<section className="experience">
				<h2>Experience</h2>
				<div className="job">
					<h3 className="job-title">
						Job title (<span className="date">Date</span>)
					</h3>
					<ul className="job-description">
						<li className="task">
							 Describe the tasks and responsibilities of the job; your
							accomplishments during your time
						</li>
						<li>
							Be specific and use numbers to show growth or accomplishments
						</li>
						<li>
							List your jobs in reverse chronological order starting with most
							recent and working your way back{" "}
						</li>
					</ul>
				</div>
			</section>
			<section className="Eductiomn">
				<h2>Education</h2>
				<div className="course">
					<h3 className="course-title">
						Associates Degree: Business Administration Roxbury Community
						College- Boston (<span className="course-date">Date</span>)
					</h3>
					
				</div>
			</section>
		</div>
	);
}


