import React, { useEffect, useState } from "react";
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

export default function WelcomePage() {
	const [oneguy, setGuy] = useState({});
	
	// useEffect(() => {
	// 	let rnd = Math.floor(Math.random() * 493) // 493 = charcount
	// 	clg(`Welcome page random char: ${rnd} / 493`);
		
	// 	axios
	// 	.get(`https://rickandmortyapi.com/api/character/${rnd}`)
	// 		.then(response => {
	// 			clg(response.data);
	// 			setGuy(response.data);
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 		});

	// 	//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	// }, []);


	return (
		<section className="welcome-page">
			<header>
				<h1>Welcome to the ultimate fan site!</h1>
				<img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
			</header>
		</section>
	);
}
