import React from "react";
import { range } from "../../utils.js";

const key_layout = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"],
];

function GuessKeyboard({ guessedLetters }) {
	function getKeyStyle(letter) {
		let className = "keyboard-letter";
		if (letter in guessedLetters) {
			className = `${className} ${guessedLetters[letter]}`;
		}
		return className;
	}

	return (
		<div className="guess-keyboard">
			{range(0, key_layout.length).map((row_id) => (
				<p key={row_id} className="keyboard-row">
					{range(0, key_layout[row_id].length).map((column_id) => (
						<span key={column_id} className={getKeyStyle(key_layout[row_id][column_id])}>
							{key_layout[row_id][column_id]}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default GuessKeyboard;
