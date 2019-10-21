import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const SearchForm = props => {
	const [term, setTerm] = useState(null);

	const doChange = e => {
		setTerm(e.target.value);
	};

	// const res = !term ? props.allchars : props.allchars.filter(e => e.includes(term));

	console.log(props)

	const res = !term ? props.allchars : props.allchars.filter(e => e.name.toLowerCase().includes(term.toLowerCase()));

	return (
		<div>
			<input type="text" onChange={doChange} value={term} placeholder="Find" />
			<ul>
				{res.map(e => {
					return <CharacterCard key={e.id} name={e.name} status={e.status} />;
				})}
			</ul>
		</div>
	);
};

export default SearchForm;

// const [target, setTarget] = useState("");
// const [results, setResults] = useState([]);
// const hChange = event => {
// 	setTarget(event.target.value);
// };

// useEffect(() => {
// 	// const res =

// })

// return (
// 	<section className="search-form">
// 		<Form>
// 			<Field value={target} onChange={hChange} type="text" name="Find" placeholder="Find" />
// 			{touched.find && errors.find && <p className="error">{errors.find}</p>}
// 		</Form>
// 	</section>
// );
