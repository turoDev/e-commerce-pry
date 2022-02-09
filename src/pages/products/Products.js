import React from "react";
import ListProducts from "../../components/ListProducts";
import * as ROUTES from "../../constants/routes";

export default function Products() {
	return (
		<div className="div-container">
			<div className="d-md-flex justify-content-md-end">
				<a href={ROUTES.PRODUCTS_EDIT.link + "/new"} className="btn btn-success">
					<i className="bi bi-plus"></i> Agregar
				</a>
			</div>

			<ListProducts />
		</div>
	);
}
