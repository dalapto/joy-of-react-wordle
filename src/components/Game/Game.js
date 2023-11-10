import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [results, setResults] = React.useState([]);

	function updateResults(new_guess) {
		const newResults = [...results];
		newResults.push({ id: crypto.randomUUID, guess: new_guess });
		setResults(newResults);
	}

	return (
		<>
			<GuessResults results={results} />
			<GuessInput updateResults={updateResults} />
		</>
	);
}

export default Game;
