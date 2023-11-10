import React from "react";

function EndBanner({ wonGame, value }) {
	const win_text = (
		<>
			<strong>Congratulations!</strong> Got it in <strong>{value} guesses</strong>.
		</>
	);
	const lose_text = (
		<>
			Sorry, the correct answer was <strong>{value}</strong>.
		</>
	);
	return (
		<div className={wonGame ? "happy banner" : "sad banner"}>
			<p>{wonGame ? win_text : lose_text}</p>
		</div>
	);
}

export default EndBanner;
