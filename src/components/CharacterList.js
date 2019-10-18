import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const api = "https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [allchars, setChars] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`

		// const id = props.match.params.id;
		// change ^^^ that line

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
		<section className="character-list">
			{/* <h2>TODO: `array.map()` over your state here!</h2> */}
			{allchars.map(e => {
				// clg("------",e.name)
				// return (<div>{e.name}</div>)
				return <CharacterCard key={e.id} name={e.name} status={e.status} />;
			})}
		</section>
	);
}
