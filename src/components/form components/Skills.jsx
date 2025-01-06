
import Input from "./Input";

const Skills = () => {
	return (
		<div className="SkillsInfo">
			<div className="head">
				<h1>
					<span>4</span>Skills Information
				</h1>
			</div>
			<form action="" className="SkillsInfoForm ">
				<Input />
				<button>Add Skill</button>
				<ul>
					<li>Skill</li>
					<li>Skill</li>
					<li>Skill</li>
					<li>Skill</li>
				</ul>
			</form>
		</div>
	);
};

export default Skills;
