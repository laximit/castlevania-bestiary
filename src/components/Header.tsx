import React from "react";
import "../styles/Header.scss";

function Header() {
	return (
		<div className="section-header">
			<div>
				<span>Aria of Sorrow</span>
				<span>CASTLEVANIA</span>
				<span>BESTIÁRIO</span>
			</div>

			<input placeholder="Pesquise" />
		</div>
	);
}

export default Header;
