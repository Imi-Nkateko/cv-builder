import Input from "./Input";
import About from "./About";
import "./GeneralInfo.css";

const GeneralInfo = () => {
	return (
		<div className="generalInfo">
			<div className="head">
				<h2>
					<span>1</span>General Information
				</h2>
				<About
					paragraph={
						"This is a critical part of your CV as it gives the potential employer a glimpse of who you are. This is an opportunity for you to introduce yourself, highlight your skills, and provide a brief summary of your career goals."
					}
				/>
			</div>
			<form className="generalInfoForm">
				<div className="fullname">
					<label htmlFor="firstName">
						FirstName
						<Input placeholder={"Enter Name"} />
					</label>
					<label htmlFor="lastName">
						LastName
						<Input placeholder={"Enter LastName"} />
					</label>
				</div>

				<label htmlFor="profession">
					Profession
					<Input placeholder={"Profession"} />
				</label>

				<label htmlFor="address">
					Address
					<Input placeholder={"Enter Address"} />
				</label>

				<div className="contact-container">
					<label htmlFor="linkedIn">
						LinkedIn
						<Input placeholder={"Your LinkedIn"} />
					</label>

					<label htmlFor="portfolio">
						Portfolio
						<Input placeholder={"Your Website"} />
					</label>

					<label htmlFor="email">
						Email
						<Input placeholder={"Email Address"} />
					</label>

					<label htmlFor="phoneNumber">
						Phone Number
						<Input placeholder={"Your Phone Number"} />
					</label>

					<label htmlFor="aboutMe">
						About
						<textarea
							name="aboutMe"
							id="aboutMe"
							placeholder="Detailed description about yourself"
						></textarea>
					</label>
				</div>
			</form>
		</div>
	);
};

export default GeneralInfo;
