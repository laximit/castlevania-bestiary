import React, { ReactElement } from "react";
import "../styles/Bestiary.scss";
import sprites from "./Sprites";

function Bestiary() {
	return (
		<div className="section-bestiary">
			<BestiaryItem
				name="Bat"
				img={sprites.bat}
				hp="10"
				mp="10"
				attack="6"
				defense="0"
				xp="1"
				soulType="Bullet"
				soulEffect="Attacks using supersonic waves"
				weakness="Weapon"
				tolerance="--"
				drops="--"
				location="Castle Corridor, Chapel, Underground Reservoir"
			/>
		</div>
	);
}

interface bestiaryItemProps {
	name: string;
	img: string | undefined;
	img2?: string | undefined;
	img3?: string | undefined;
	hp: string;
	mp: string;
	attack: string;
	defense: string;
	xp: string;
	soulType: string;
	soulEffect: string;
	weakness: string;
	tolerance: string;
	drops: string;
	location: string;
}

function BestiaryItem(props: bestiaryItemProps) {
	return (
		<div>
			<img src={props.img} />
			<span>{props.name}</span>

			<div className="enemy-info">
				<div className="images">
					<img src={props.img} />
					<img src={props.img2} />
					<img src={props.img3} />
				</div>
				<div className="statistics">
					<div className="info-item info_name">
						<span>Nome</span>
						<span>{props.name}</span>
					</div>
					<div className="info-item info_hp">
						<span>HP</span>
						<span>{props.hp}</span>
					</div>
					<div className="info-item info_mp">
						<span>MP</span>
						<span>{props.mp}</span>
					</div>
					<div className="info-item info_attack">
						<span>Ataque</span>
						<span>{props.attack}</span>
					</div>
					<div className="info-item info_defense">
						<span>Defesa</span>
						<span>{props.defense}</span>
					</div>
					<div className="info-item info_xp">
						<span>Experiência</span>
						<span>{props.xp}</span>
					</div>
					<div className="info-item info_soul-type">
						<span>Tipo de Alma</span>
						<span>{props.soulType}</span>
					</div>
					<div className="info-item info_soul-effect">
						<span>Efeito da Alma</span>
						<span>{props.soulEffect}</span>
					</div>
					<div className="info-item info_weakness">
						<span>Fraqueza</span>
						<span>{props.weakness}</span>
					</div>
					<div className="info-item info_tolerance">
						<span>Tolerância</span>
						<span>{props.tolerance}</span>
					</div>
					<div className="info-item info_drops">
						<span>Drops</span>
						<span>{props.drops}</span>
					</div>
					<div className="info-item info_location">
						<span>Localizações</span>
						<span>{props.location}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bestiary;
