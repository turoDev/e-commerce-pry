import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchProductById, saveProduct } from "./productsApi";
import * as ROUTES from "../../constants/routes";

export default function ProductEdit() {
	let params = useParams();
	let navigate = useNavigate();
	const prd = { id: "", nombre: "", descripcion: "", precio: "", stock: "" };

	const [sNom, setNom] = useState("");
	const [sDesc, setDesc] = useState("");
	const [sPrec, setPrec] = useState("");
	const [sStock, setStoc] = useState("");

	useEffect(() => {
		search();
	}, []);

	const search = async () => {
		let id = params.id;
		if (id == "new") {
			//setProduct(prd);
		} else {
			let resultado = await searchProductById(id);
            console.log(resultado);
			setNom(resultado.nombre);
			setDesc(resultado.descripcion);
			setPrec(resultado.precio);
			setStoc(resultado.stock);
		}

		/*console.log(id);
		console.log(product);//*/
	};

	const clickCancel = () => {
		//setProduct(prd);
		navigate(ROUTES.PRODUCTS.link);
	};

	const clicAcept = () => {
		let prod = { id: params.id, nombre: sNom, descripcion: sDesc, precio: sPrec, stock: sStock };
		saveProduct(prod);
        navigate(ROUTES.PRODUCTS.link);
	};

	return (
		<div className="div-container">
			<div className="mb-3 row">
				<label className="col-sm-2 col-form-label">Nombre:</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" onChange={(e) => setNom(e.target.value)} value={sNom} />
				</div>
			</div>
			<div className="mb-3 row">
				<label className="col-sm-2 col-form-label">Descripcion:</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" onChange={(e) => setDesc(e.target.value)} value={sDesc} />
				</div>
			</div>
			<div className="mb-3 row">
				<label className="col-sm-2 col-form-label">Precio:</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" onChange={(e) => setPrec(e.target.value)} value={sPrec} />
				</div>
			</div>
			<div className="mb-3 row">
				<label className="col-sm-2 col-form-label">Stock:</label>
				<div className="col-sm-10">
					<input type="number" className="form-control" onChange={(e) => setStoc(e.target.value)} value={sStock} />
				</div>
			</div>
			<div className="mb-3">
				<input className="form-control" type="file" id="formFile" />
			</div>

			<div className="mb-3">
				<button type="button" className="btn btn-success" onClick={clicAcept}>
					Aceptar
				</button>
				<button type="button" className="btn btn-danger" onClick={clickCancel}>
					Cancelar
				</button>
			</div>
		</div>
	);
}
