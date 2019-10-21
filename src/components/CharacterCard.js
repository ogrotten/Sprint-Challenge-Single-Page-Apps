import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
	const { id, name, status } = props;
	// console.log(movie);

	const Charcard = styled.div`
		color: navy;
		display: block;
		border: 2px solid silver;
		min-width: 175px;
		max-width: 175px;
		margin: 15px; 
		padding: 5px 15px;
	`;

	return (
		<Charcard>
			<p><strong>{name}</strong></p>
			<p><em>({status})</em></p>
		</Charcard>
	);
}
