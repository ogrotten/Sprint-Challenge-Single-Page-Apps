import React from "react";

export default function CharacterCard(props) {
	const { id, name, status } = props;
	// console.log(movie);
	
	return (
		<div className="char-card">
			{/* <h2></h2> */}
			<div className="char-status">
				<strong>{name}</strong> <em>({status})</em>
			</div>
		</div>
	);

}
