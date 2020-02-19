import React from "react";
import { Link } from "react-router-dom";

export default function PrevNext(props) {
	return (
		<>
			<Link to={props.pages[0]}>Previous</Link> || <Link to={props.pages[1]}>Next</Link>
		</>
	);
}
