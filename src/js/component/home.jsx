import React, { useState, useEffect } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [entradas, setEntradas] = useState([]);

	function getDatos() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/connie852")
			.then(respuesta => respuesta.json())
			.then(respuesta => setEntradas(respuesta))
			.catch(error => console.log("Ocurre un error...", error));
	}

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	var raw = JSON.stringify(entradas);

	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};

	fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/connie852",
		requestOptions
	)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("error", error));

	function agregarTarea() {
		setEntradas([...entradas, { label: inputValue, done: false }]);
		console.log(entradas);
	}
	function borrarTarea(item) {
		const listaNueva = entradas.filter(key => key !== item);
		setEntradas(listaNueva);
		console.log(listaNueva);
	}

	useEffect(() => {
		getDatos();
	}, []);

	// funcion que valida que el campo  tarea no este vacio y vaya llenanod el arreglo lista tareas
	const validatetarea = () => {
		// === COMPARACIÓN ESTRICTA
		if (inputValue === "") {
			console.log("El campo input no puede estar vacio");
		} else {
			console.log("Todo está correcto");
		}
	};

	let arreglo = [];

	return (
		<>
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
							validatetarea();
							agregarTarea();
						}}>
						Agregar
					</button>
					<div
						className="container "
						style={{
							textAlign: "center"
						}}>
						<ul className="list-group">
							{entradas.map((item, index) => {
								return (
									<li
										className="list-group-item list-group-item-action list-group-item-info"
										key={index}>
										{item.label}
										<button
											style={{ marginLeft: "4px" }}
											className="btn"
											type="button"
											onClick={() => {
												borrarTarea(item);
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
		</>
	);
};

export default Home;

// import React, { useState, useEffect } from "react";

// export default function App() {
// 	const [inputValue, setInputValue] = useState("");
// 	const [entradas, setEntradas] = useState([]);

// 	useEffect(() => {
// 		console.log(
// 			"mi arreglo tiene",
// 			entradas.length,
// 			"elementos hasta el momento"
// 		);
// 	}, [entradas]);

// 	function getDatos() {
// 		fetch("https://assets.breatheco.de/apis/fake/todos/user/connie852")
// 			.then(respuesta => respuesta.json())
// 			.then(respuesta => setEntradas(respuesta))
// 			.catch(error => console.log("Ocurrió un error", error));
// 	}
// 	var myHeaders = new Headers();
// 	myHeaders.append("Content-Type", "application/json");

// 	var raw = JSON.stringify(entradas);

// 	var requestOptions = {
// 		method: "PUT",
// 		headers: myHeaders,
// 		body: raw,
// 		redirect: "follow"
// 	};

// 	fetch(
// 		"https://assets.breatheco.de/apis/fake/todos/user/connie852",
// 		requestOptions
// 	)
// 		.then(response => response.text())
// 		.then(result => console.log(result))
// 		.catch(error => console.log("error", error));

// 	function agregarTarea() {
// 		setEntradas([...entradas, { label: inputValue, done: false }]);
// 		console.log(entradas);
// 	}

// 	function borrarTarea(index) {
// 		const listaNueva = entradas.filter(key => key !== index);
// 		setEntradas(listaNueva);
// 		console.log(listaNueva);
// 	}

// 	useEffect(() => {
// 		getDatos();
// 	}, []);

// 	const validateInput = () => {
// 		if (inputValue === "") console.log("El input no puede estar vacio");
// 		else console.log("Todo Perfecto");
// 	};

// 	let arreglo = [];

// 	return (
// 		<div id="div1" className="container">
// 			<h1 style={{ textAlign: "center" }}>To Do List</h1>
// 			<div style={{ textAlign: "center" }}>
// 				<input
// 					className="form-control"
// 					type="text"
// 					placeholder="Nueva Tarea"
// 					onChange={e => setInputValue(e.target.value)}
// 					value={inputValue}
// 				/>
// 				<button
// 					className="btn btn-primary"
// 					type="button"
// 					onClick={() => {
// 						validateInput();
// 						agregarTarea();
// 					}}>
// 					Agregar
// 				</button>

//
// 			</div>
// 		</div>
// 	);
// }
