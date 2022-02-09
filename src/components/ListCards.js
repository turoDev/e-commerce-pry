import React, { useEffect, useState } from "react";
import { searchProducts } from "../pages/products/productsApi";
import Card from "./Card";
import Paginacion from "./Paginacion";

export default function ListCards() {
	const [productos, setProductos] = useState([]);
	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_PAGINA = 8;

	const search = async () => {
		let resultado = await searchProducts();

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
		<>
			<div className="col">
				<div className="row">
					{aProd.map((prod) => (
						<Card key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} stock={prod.stock}>
							{prod.descripcion}
						</Card>
					))}
				</div>
			</div>
			<Paginacion
				pagina={paginaActual}
				total={getTotalPaginas()}
				onChange={(pagina) => {
					setPaginaActual(pagina);
				}}
			/>
		</>
	);
}
