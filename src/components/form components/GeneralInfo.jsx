import Input from "./Input";

import "./GeneralInfo.css";

const GeneralInfo = ({ onChange }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		onChange(name, value);
	};

	return (
		<div className="generalInfo">
			<form className="generalInfoForm">
				<div className="head">
					<h2>General Information</h2>
				</div>
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

				<div className="contact-container">
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
							type={"email"}
						/>
					</label>

					<label htmlFor="phoneNumber">
						Phone Number
						<Input
							placeholder={"Your Phone Number"}
							name={"phone"}
							onChange={handleInputChange}
							type={"number"}
						/>
					</label>

					<label htmlFor="aboutMe">
						About
						<textarea
							id=""
							placeholder="about yourself"
							name={"about"}
							onChange={handleInputChange}
							wrap="off"
							cols="30"
							rows="5"
						></textarea>
					</label>
				</div>
			</form>
		</div>
	);
};

export default GeneralInfo;
