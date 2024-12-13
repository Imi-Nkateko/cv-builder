import "./App.css";

// Navbar.jsx
// Navbar.jsx
export function Navbar() {
	return (
		<header className="header" role="banner">
			<h1 className="logo">
				<a href="#">
					Terence <span>Devine</span>
				</a>
			</h1>
			<div className="nav-wrap">
				<nav className="main-nav" role="navigation">
					<ul className="unstyled list-hover-slide">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Work</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
					</ul>
				</nav>
				<ul className="social-links list-inline unstyled list-hover-slide">
					<li>
						<a href="#">Twitter</a>
					</li>
					<li>
						<a href="#">Google+</a>
					</li>
					<li>
						<a href="#">GitHub</a>
					</li>
					<li>
						<a href="#">CodePen</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
