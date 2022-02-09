import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonProd from "./prodsJSON.json";
import Paginacion from "./Paginacion";
import { searchProducts, removeProduct } from "../pages/products/productsApi";
import * as ROUTES from "../constants/routes";
import "../components/list-products.css";

export default function ListProducts() {
	let navigate = useNavigate();
	const prd = { id: "", nombre: "", descripcion: "", precio: "", stock: "" };
	const [productos, setProductos] = useState([]);
	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_PAGINA = 9;

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

	const deleteProduct = async (id) => {
		await removeProduct(id);
		search();
	};

	return (
		<>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Nombre</th>
						<th scope="col">Descripcion</th>
						<th scope="col">Precio</th>
						<th scope="col">Stock</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{aProd.map((prod) => (
						<tr key={prod.id}>
							<th scope="row">{prod.id}</th>
							<td>{prod.nombre}</td>
							<td>{prod.descripcion}</td>
							<td>{prod.precio}</td>
							<td>{prod.stock}</td>
							<td>
								<a href={ROUTES.PRODUCTS_EDIT.link + "/" + prod.id} className="btn btn-warning btn-sm">
									<i className="bi bi-pencil-square"></i>
								</a>
								<button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProduct(prod.id)}>
									<i className="bi bi-trash"></i>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

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
