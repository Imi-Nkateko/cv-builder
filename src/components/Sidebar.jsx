import "./Sidebar.css";
import { SidebarBtn } from "./SidebarBtn";
import { Personal } from "./Personal";

export const Sidebar = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const toggleForm = () => {
		setIsFormVisible((prev) => !prev); // Toggle the visibility
	};
	return (
		<nav>
			<h1>Cv Builder</h1>
			<ul>
				<li>
					<SidebarBtn onClick={console.log("hello")} />
				</li>
				<li>
					<SidebarBtn />
				</li>
				<li>
					<SidebarBtn />
				</li>
			</ul>
			<Personal />
		</nav>
	);
};
