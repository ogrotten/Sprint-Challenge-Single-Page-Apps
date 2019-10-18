import React from "react";

export default function CharacterCard(props) {
	const { id, name, status } = props;
	// console.log(movie);
	
	return (
		<div className="char-card">
			<h2>{name}</h2>
			<div className="char-status">
				status: <strong>{status}</strong>
			</div>
		</div>
	);

}
