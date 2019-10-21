import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const CharSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 4px solid #efefef;
	max-width: 100%;
	margin: 15px;
	padding: 5px 15px;
`;

const api = "https://rickandmortyapi.com/api/character/";

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect
	const [allchars, setChars] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		axios
			.get(api)
			.then(response => {
				setChars(response.data.results);
			})
			.catch(error => {
				console.error(error);
			});
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	return (
		<CharSection className="character-list">
			{/* <SearchForm props={props}/> */}
			{/* <h2>TODO: `array.map()` over your state here!</h2> */}
			{allchars.map(e => {
				return <CharacterCard key={e.id} name={e.name} status={e.status} />;
			})}
		</CharSection>
	);
}
