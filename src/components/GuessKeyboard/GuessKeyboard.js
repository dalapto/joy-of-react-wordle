import React from "react";
import { range } from "../../utils.js";

const key_layout = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"],
];

function GuessKeyboard({}) {
	const [guessedLetters, setGuessedLetters] = React.useState({});

	// correct
	// misplaced
	// incorrect
	function guessCount(guess) {}
	function getKeyStyle(guess) {}

	return (
		<div className="guess-keyboard">
			{range(0, key_layout.length).map((row_id) => (
				<p key={row_id} className="keyboard-row">
					{range(0, key_layout[row_id]).map((column_id) => (
						<span key={column_id} className="keyboard-letter">
							{key_layout[row_id][column_id]}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default GuessKeyboard;
