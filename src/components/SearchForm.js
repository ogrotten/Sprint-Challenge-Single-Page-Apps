import React, { useEffect, useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SearchForm = ({ values, touched, errors, props }) => {
	const [target, setTarget] = useState("");
	const [results, setResults] = useState([]);
	const hChange = event => {
		setTarget(event.target.value);
	};

	useEffect(() => {
		// const res = 

	})

	return (
		<section className="search-form">
			<Form>
				<Field value={target} onChange={hChange} type="text" name="Find" placeholder="Find" />
				{touched.find && errors.find && <p className="error">{errors.find}</p>}
			</Form>
		</section>
	);
};

export default SearchForm;
