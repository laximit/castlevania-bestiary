import React, { ReactElement } from "react";
import "../styles/Bestiary.scss";
import sprites from "./Sprites";

function Bestiary() {
	return (
		<div className="section-bestiary">
			<BestiaryItem img={sprites.bat} name="Bat" />
			<BestiaryItem img={sprites.zombie} name="Zombie" />
			<BestiaryItem img={sprites.skeleton} name="Skeleton" />
			<BestiaryItem img={sprites.merman} name="Merman" />
			<BestiaryItem img={sprites.axearmor} name="Axe Armor" />
			<BestiaryItem img={sprites.skullarcher} name="Skull Archer" />
			<BestiaryItem img={sprites.peepingeye} name="Peeping Eye" />
			<BestiaryItem img={sprites.killerfish} name="Killer Fish" />
			<BestiaryItem img={sprites.bonepillar} name="Bone Pillar" />
		</div>
	);
}

interface bestiaryItemProps {
	name: string;
	img: string | undefined;
}

function BestiaryItem(props: bestiaryItemProps) {
	return (
		<div>
			<img src={props.img} />
			<span>{props.name}</span>
		</div>
	);
}

export default Bestiary;
