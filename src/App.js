import React, { useState } from 'react';

const App = () => {
	const [number, setNumber] = useState(0);
	const [factorial, setFactorial] = useState(1);

	const handleCalculate = () => {
		let temp = number;
		if (number === 0) {
			return setFactorial(1);
		}
		if (temp < 0) {
			temp = temp * -1;
		}
		let result = 1;
		for (var i = 1; i <= temp; i++) {
			result *= i;
		}
		number < 0 ? setFactorial(result * -1) : setFactorial(result);
	};

	return (
		<div>
			<h1>Factorial Calculator</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					value={number}
					onChange={(event) => setNumber(event.target.value)}
					type='number'
					placeholder='Enter a number...'
				/>
				<br />
				<button onClick={handleCalculate}>Calculate Factorial</button>
			</form>
			<h2>Factorial: {factorial}</h2>
		</div>
	);
};

export default App;
