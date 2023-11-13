import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndBanner from "../EndBanner/EndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers";
import GuessKeyboard from "../GuessKeyboard/GuessKeyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
	const [guessesMade, setGuessesMade] = React.useState([]);
	const [guessedLetters, setGuessedLetters] = React.useState({});
	const [isGameOver, setIsGameOver] = React.useState(false);
	const [answer, setAnswer] = React.useState(() => {
		const next = sample(WORDS);
		console.info({ next });
		return next;
	});
	const [bannerValue, setBannerValue] = React.useState(answer);

	function updateGuessedLetters(new_letters) {
		const newGuessed = { ...guessedLetters };
		// eslint-disable-next-line no-unused-vars
		for (let [_, value] of Object.entries(new_letters)) {
			const { letter, status } = value;
			if (letter in newGuessed) {
				if (newGuessed[letter] === "correct") {
					continue;
				}
				if (newGuessed[letter] === "misplaced" && status !== "correct") {
					continue;
				}
			}
			newGuessed[letter] = status;
		}
		setGuessedLetters(newGuessed);
	}

	function handleRestartGame() {
		setIsGameOver(false);
		setGuessesMade([]);
		setGuessedLetters({});

		const next = sample(WORDS);
		console.info({ next });
		setAnswer(next);
	}

	function updateGuessesMade(new_guess) {
		const new_guesses = [...guessesMade];
		const guess_obj = { id: crypto.randomUUID, guess: checkGuess(new_guess, answer) };
		new_guesses.push(guess_obj);
		updateGuessedLetters(guess_obj.guess);
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
			<GuessKeyboard guessedLetters={guessedLetters} />
			{isGameOver && <EndBanner wonGame={bannerValue !== answer} value={bannerValue} handleRestart={handleRestartGame} />}
		</>
	);
}

export default Game;
