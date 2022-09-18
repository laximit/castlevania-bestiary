import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Bestiary from "./components/Bestiary";

function App() {
	return (
		<div className="App">
			<Header />
			<Bestiary />
		</div>
	);
}

export default App;
