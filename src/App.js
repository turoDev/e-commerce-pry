import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductEdit from "./pages/products/ProductEdit";
import Catalogo from "./pages/Catalogo";
import Sales from "./pages/sales/Sales";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<ProductEdit />} />
				<Route path="/sales" element={<Sales />} />
				<Route path="/catalogs" element={<Catalogo />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
