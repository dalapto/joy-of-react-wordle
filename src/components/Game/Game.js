import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner/EndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessesMade, setGuessesMade] = React.useState([]);
	const [isGameOver, setIsGameOver] = React.useState(false);
	const [bannerValue, setBannerValue] = React.useState(answer);

	function updateGuessesMade(new_guess) {
		const new_guesses = [...guessesMade];
		new_guesses.push({ id: crypto.randomUUID, guess: checkGuess(new_guess, answer) });
		setGuessesMade(new_guesses);
		if (new_guess === answer) {
			setIsGameOver(true);
			setBannerValue(guessesMade.length);
		} else if (new_guesses.length === NUM_OF_GUESSES_ALLOWED) {
			setIsGameOver(true);
		}
	}

	return (
		<>
			<GuessResults results={guessesMade} />
			<GuessInput updateResults={updateGuessesMade} isGameOver={isGameOver} />
			{isGameOver && <EndBanner wonGame={bannerValue !== answer} value={bannerValue} />}
		</>
	);
}

export default Game;
