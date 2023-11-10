import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";
import Guess from "../Guess/Guess.js";

function GuessResults({ results }) {
	return (
		<div className="guess-results">
			{range(0, NUM_OF_GUESSES_ALLOWED).map((guess_id) => (
				<Guess key={guess_id} guess={guess_id < results.length ? results[guess_id].guess : ""} />
			))}
		</div>
	);
}

export default GuessResults;
