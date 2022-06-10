import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";
const ProductList = () => {
	const newH5 = styled.h5`
		text-transform: none;
	`;
	const { filtered_products: products, gridView } = useFilterContext();
	return products.length < 1 ? (
		<newH5>Sorry, no products match yor search...</newH5>
	) : gridView ? (
		<GridView products={products}>product list</GridView>
	) : (
		<ListView products={products} />
	);
};

export default ProductList;
