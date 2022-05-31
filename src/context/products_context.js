import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
	isSidebarOpen: false,
	loading: false,
	error: false,
	products: [],
	featured_products: [],
	single_product_loading: false,
	single_product_error: false,
	single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	//changing the state of the sidebar open/close
	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	//fetching the products from the end point

	const getProducts = async (url) => {
		try {
			dispatch({ type: GET_PRODUCTS_BEGIN });
			const response = await axios.get(url);
			const products = response.data;
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		} catch {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};
	const getSingleProducts = async (url) => {
		try {
			dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
			const response = await axios.get(url);
			const product = response.data;
			dispatch({
				type: GET_SINGLE_PRODUCT_SUCCESS,
				payload: product,
			});
		} catch {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
		}
	};
	useEffect(() => {
		getProducts(url);
	}, []);
	return (
		<ProductsContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
				dispatch,
				getSingleProducts,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
