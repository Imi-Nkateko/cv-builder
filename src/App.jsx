import "./App.css";
// import { Navbar } from './Navbar.jsx';
import { Page } from "./components/Page.jsx";
import { Sidebar } from "./components/Sidebar";

function App() {
	return (
		<div className="app">
			<Sidebar />
			<Page />
		</div>
	);
}

export default App;
