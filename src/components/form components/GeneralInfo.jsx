import Input from "./Input";
import About from "./About";
import "./GeneralInfo.css";

const GeneralInfo = ({ onChange }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target; // Use input's `name` attribute to identify the field
		onChange(name, value);
	};
	// Update the specific field in parent state
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
						<Input
							placeholder={"Enter Name"}
							name={"firstName"}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor="lastName">
						LastName
						<Input
							placeholder={"Enter LastName"}
							name={"lastName"}
							onChange={handleInputChange}
						/>
					</label>
				</div>

				<label htmlFor="profession">
					Profession
					<Input
						placeholder={"Profession"}
						name={"profession"}
						onChange={handleInputChange}
					/>
				</label>

				<label htmlFor="address">
					Address
					<Input
						placeholder={"Enter Address"}
						name={"address"}
						onChange={handleInputChange}
					/>
				</label>

				<div className="contact-container">
					<label htmlFor="linkedIn">
						LinkedIn
						<Input
							placeholder={"Your LinkedIn"}
							name={"linkedIn"}
							onChange={handleInputChange}
						/>
					</label>

					<label htmlFor="portfolio">
						Portfolio
						<Input
							placeholder={"Your Website"}
							name={"portfolio"}
							onChange={handleInputChange}
						/>
					</label>

					<label htmlFor="email">
						Email
						<Input
							placeholder={"Email Address"}
							name={"email"}
							onChange={handleInputChange}
						/>
					</label>

					<label htmlFor="phoneNumber">
						Phone Number
						<Input
							placeholder={"Your Phone Number"}
							name={"phone"}
							onChange={handleInputChange}
						/>
					</label>

					<label htmlFor="aboutMe">
						About
						<textarea
							name="summary"
							id="summary"
							placeholder="Detailed description about yourself"
							onChange={handleInputChange}
						></textarea>
					</label>
				</div>
			</form>
		</div>
	);
};

export default GeneralInfo;
