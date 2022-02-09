import React from "react";

export default function Card(props) {
	const getCarSales = () => {
		if (!localStorage["carSales"]) {
			localStorage["carSales"] = "[]";
		}
	
		let carSales = localStorage["carSales"];
		carSales = JSON.parse(carSales);
		return carSales;
	};

	const setCarSales = () => {
		let carSales = getCarSales();
		carSales.push({
			id: props.id,
			nombre: props.nombre,
			precio: props.precio,
			stock: props.stock,
			descripcion: props.children
		});

		console.log(props);
		localStorage["carSales"] = JSON.stringify(carSales);
	};

	return (
		<div className="col-12 col-md-6 col-lg-3">
			<div className="card">
				<img className="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap" />
				<div className="card-body">
					<h4 className="card-title">{props.nombre}</h4>
					<p className="card-text">{props.children}</p>
					<div className="row">
						<div className="col">
							<p className="btn btn-danger btn-block">${props.precio}</p>
						</div>
						<div className="col">
							<button href="#" className="btn btn-success btn-block" onClick={setCarSales}>
								<i className="bi bi-cart-plus"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
