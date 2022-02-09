import React from "react";

export default function Paginacion(props) {
	const getPaginas = () => {
		const resultado = [];

		for (let i = 0; i < props.total; i++) {
			let pagina = i + 1;

			resultado.push(
				<li key={i} className={props.pagina === pagina ? "page-item active" : "page-item"} aria-current="page">
					<a
						onClick={() => {
							props.onChange(pagina);
						}}
						className="page-link"
					>
						{pagina}
					</a>
				</li>
			);
		}

		return resultado;
	};

	return (
		<div className="topbar-filter">
			<div className="pagination2">
				<nav aria-label="...">
					<ul className="pagination justify-content-center">{getPaginas()}</ul>
				</nav>
			</div>
		</div>
	);
}
