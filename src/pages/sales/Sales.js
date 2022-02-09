import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Paginacion from "../../components/Paginacion";

export default function Sales() {
	const [productos, setProductos] = useState([]);
	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_PAGINA = 8;

	const getCarSales = () => {
		if (!localStorage["carSales"]) {
			localStorage["carSales"] = "[]";
		}

		let carSales = localStorage["carSales"];
		carSales = JSON.parse(carSales);
		return carSales;
	};

	const getTotal = () => {
		let resultado = getCarSales();
		let total = 0;

		for (var valor of resultado) {
			total = total + Number(valor.precio);
		}

		return "Total: $" + total;
	};

	const search = async () => {
		let resultado = getCarSales();

		setProductos(resultado);
	};

	useEffect(() => {
		search();
	}, []);

	const getTotalPaginas = () => {
		return Math.ceil(productos.length / TOTAL_PAGINA);
	};

	let aProd = productos.slice((paginaActual - 1) * TOTAL_PAGINA, paginaActual * TOTAL_PAGINA);

	return (
		<div className="div-container">
			{aProd.map((prod) => (
				<Card key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} stock={prod.stock}>
					{prod.descripcion}
				</Card>
			))}

			<div>{getTotal()}</div>

			<Paginacion
				pagina={paginaActual}
				total={getTotalPaginas()}
				onChange={(pagina) => {
					setPaginaActual(pagina);
				}}
			/>
		</div>
	);
}
