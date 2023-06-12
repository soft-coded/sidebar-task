import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function handleSidebarOpen() {
	const sidebar = document.querySelector(".sidebar")!;
	sidebar.classList.remove("hidden");
}

function App() {
	return (
		<main>
			<button onClick={handleSidebarOpen}>OPEN SIDEBAR</button>
			<Sidebar />
		</main>
	);
}

export default App;
