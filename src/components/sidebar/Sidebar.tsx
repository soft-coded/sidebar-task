import "./sidebar.css";

function handleSidebarClose() {
	const sidebar = document.querySelector(".sidebar")!;
	sidebar.classList.add("hidden");
}

export default function Sidebar() {
	return (
		<div className="sidebar hidden">
			<div className="button-container">
				<button onClick={handleSidebarClose}>CLOSE</button>
			</div>
			<ul>
				<li>HOME</li>
				<li>ABOUT</li>
				<li>CONTACT US</li>
				<li>HELP</li>
				<li>MORE INFO</li>
			</ul>
		</div>
	);
}
