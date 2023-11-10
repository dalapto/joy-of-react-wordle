import React from "react";

function GuessInput({ updateResults }) {
	const [guess, setGuess] = React.useState("");

	function handleSubmitGuess() {
		console.log(guess);
		updateResults(guess);
		setGuess("");
	}

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmitGuess();
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				pattern="[A-z]{5,5}"
				minLength={5}
				maxLength={5}
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
