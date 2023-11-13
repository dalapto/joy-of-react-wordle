import React from "react";

function EndBanner({ wonGame, value, handleRestart }) {
	const win_text = (
		<>
			<strong>Congratulations!</strong> Got it in{" "}
			<strong>
				{value + 1} guess{value > 0 ? "es" : ""}
			</strong>
			.
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
			<button className="restart" onClick={handleRestart}>
				<strong>RESTART GAME</strong>
			</button>
		</div>
	);
}

export default EndBanner;
