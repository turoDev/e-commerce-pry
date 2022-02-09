import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top" id="ftco-navbar">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#ftco-nav"
					aria-controls="ftco-nav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a href={ROUTES.HOME.link} className="nav-link">
								{ROUTES.HOME.name}
							</a>
						</li>
						<li className="nav-item">
							<a href={ROUTES.CATALOGS.link} className="nav-link">
								{ROUTES.CATALOGS.name}
							</a>
						</li>
						<li className="nav-item">
							<a href={ROUTES.PRODUCTS.link} className="nav-link">
								{ROUTES.PRODUCTS.name}
							</a>
						</li>
						<li className="nav-item nav-img">
							<a href={ROUTES.SALES.link} className="nav-link nav-img">
								<i className="bi bi-cart4"></i>
							</a>
						</li>
						<li className="nav-item nav-img">
							<a href={ROUTES.LOGIN.link} className="nav-link nav-img">
								<i className="bi bi-person-fill"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
