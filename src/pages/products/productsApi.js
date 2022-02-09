export async function searchProducts() {
	if (!localStorage["products"]) {
		localStorage["products"] = "[]";
	}

	let products = localStorage["products"];
	products = JSON.parse(products);
	return products; /*/

	let url = ROUTES.REACT_APP_API + "products";
	let request = await fetch(url, {
		method: "GET",
		headers: getHeaders(),
	});
	return await request.json();//*/
}

export async function searchProductById(id) {
	let products = await searchProducts();

	return products.find((products) => products.id == id); //*/
	/*let url = ROUTES.REACT_APP_API + "products/" + id;
	let request = await fetch(url, {
		method: "GET",
		headers: getHeaders(),
	});
	return await request.json();//*/
}

function srhProductIndex(paProd, pId) {
	return paProd.findIndex((paProd) => paProd.id == pId);
}

export async function saveProduct(pProd) {
	let products = await searchProducts();

	if (pProd.id == "new") {
		// nuevo
		pProd.id = String(Math.round(Math.random() * 100));
		products.push(pProd);
	} else {
		// editar
		let indice = srhProductIndex(products, pProd.id);
		products[indice] = pProd; //*/
	}

	localStorage["products"] = JSON.stringify(products); /*/

	let url = ROUTES.REACT_APP_API + "product";
	await fetch(url, {
		method: "POST",
		headers: getHeaders(),
		body: JSON.stringify(product),
	});//*/
}

export async function removeProduct(id) {
	let products = await searchProducts();

	let indice = srhProductIndex(products, id);
	products.splice(indice, 1);

	localStorage["products"] = JSON.stringify(products); /*/

	let url = ROUTES.REACT_APP_API + "products/" + id;
	await fetch(url, {
		method: "DELETE",
		headers: getHeaders(),
	});//*/
}

function getHeaders() {
	return {
		Accept: "application/json",
		"Content-Type": "application/json",
		//Authorization: localStorage.token,
	};
}
