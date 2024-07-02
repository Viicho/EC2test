import { Children, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const winner = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function App() {
	const Square = ({ index, valor }) => {
		return (
			<div onClick={(e) => onClick(e, index)} className="square">
				{valor}
			</div>
		);
	};
	const [tablero, setTablero] = useState(Array(9).fill(null));
	const [turno, setTurno] = useState(true);
	const [ganador, setGanador] = useState(null);

	const haveWinner = (newBoard) => {
		for (let i = 0; i < winner.length; i++) {
			const [pos1, pos2, pos3] = winner[i];
			if (newBoard[pos1] && newBoard[pos1] === newBoard[pos2] && newBoard[pos2] === newBoard[pos3]) {
				setGanador(newBoard[pos1]);
				setTimeout(() => {
					alert('GANADOR');
				}, 0);
				return;
			}
		}
	};

	const onClick = (event, index) => {
		if (tablero[index] || ganador) return;

		let whoPlays = turno ? 'X' : 'O';

		let newBoard = [...tablero];
		newBoard[index] = whoPlays;

		setTablero(newBoard);
		haveWinner(newBoard);
		setTurno(!turno);
	};

	return (
		<>
			<div className="board">
				{tablero.map((value, index) => (
					<Square key={index} index={index} valor={value} />
				))}
			</div>
			{turno ? <h1>Turno de las X</h1> : <h1>Turno de las O</h1>}
		</>
	);
}

export default App;
