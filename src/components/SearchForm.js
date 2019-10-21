import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const SearchForm = props => {
	const [term, setTerm] = useState(null);

	const doChange = e => {
		setTerm(e.target.value);
	};

	const res = !term ? props.allchars : props.allchars.filter(e => e.name.toLowerCase().includes(term.toLowerCase()));

	return (
		<>
			<input type="text" onChange={doChange} value={term} placeholder="Find" />
			{res.map(e => {
				return <CharacterCard key={e.id} name={e.name} status={e.status} />;
			})}
		</>
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
