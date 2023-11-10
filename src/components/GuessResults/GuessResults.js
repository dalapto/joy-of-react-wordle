import React from "react";

function GuessResults({ results }) {
	return (
		<div className="guess-results">
			{results.map(({ id, guess }) => (
				<p key={id} className="guess">
					{guess}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
