import React, { useState, useEffect } from "react";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [entradas, setEntradas] = useState([]);

	useEffect(() => {
		console.log(
			"mi arreglo tiene",
			entradas.length,
			"elementos hasta el momento"
		);
	}, [entradas]);

	const validateInput = () => {
		if (inputValue === "") console.log("El input no puede estar vacio");
		else console.log("Todo Perfecto");
	};

	let arreglo = [];

	return (
		<div id="div1" className="container">
			<h1 style={{ textAlign: "center" }}>To Do List</h1>
			<div style={{ textAlign: "center" }}>
				<input
					className="form-control"
					type="text"
					placeholder="Nueva Tarea"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<button
					className="btn btn-primary"
					type="button"
					onClick={() => {
						validateInput();
						setEntradas([...entradas, inputValue]);
					}}>
					Agregar
				</button>

				<div
					className="container "
					style={{
						textAlign: "center"
					}}>
					<ul className="list-group">
						{entradas.map((index, key) => {
							return (
								<li
									className="list-group-item list-group-item-action list-group-item-info"
									key={key}>
									{index}
									<button
										style={{ marginLeft: "4px" }}
										className="btn btn-light"
										type="button"
										onClick={() => {
											const listaNueva = entradas.filter(
												key => key !== index
											);
											setEntradas(listaNueva);
											console.log(listaNueva);
											console.log("hola");
											//console.log(entrada)
										}}>
										<i
											className="fas fa-trash-alt"
											style={{
												color: "red"
											}}
										/>
									</button>
									<button className="btn"></button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
