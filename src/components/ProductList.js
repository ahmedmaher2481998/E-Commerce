import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const { filtered_products: products, gridView } = useFilterContext();
	return products.length < 1 ? (
		<h5 style={{ textTransform: "none" }}>
			Sorry, no products match yor search...
		</h5>
	) : gridView ? (
		<GridView products={products}>product list</GridView>
	): <ListView
};

export default ProductList;
