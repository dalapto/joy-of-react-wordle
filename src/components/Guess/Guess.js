import React from "react";
import { range } from "../../utils.js";

function Guess({ id, guess }) {
	function getCellStyle(guess, id) {
		return "" === guess ? "cell" : `cell ${guess[id].status}`;
	}
	return (
		<p key={id} className="guess">
			{range(0, 5).map((cell_id) => (
				<span key={cell_id} className={getCellStyle(guess, cell_id)}>
					{"" === guess ? "" : guess[cell_id].letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
