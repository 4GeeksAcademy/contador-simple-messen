import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";
import { Digito } from "./Digito";

//create your first component
const Home = ({ count }) => {

	const countString = count.toString().padStart(6, "0");

	const digits = countString.split("");

	return (
		<div className="bg-black row row-cols-1 row-cols-md-3 justify-content-center g-2">
			<Card />

			{digits.map((digit, index) => (
				<Digito key={index} value={digit} />
			))}
		</div>
	);
};

export default Home;