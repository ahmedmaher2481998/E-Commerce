import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
	SIDEBAR_OPEN_ACTION,
	SIDEBAR_CLOSE_ACTION,
	GET_PRODUCTS_BEGIN_ACTION,
	GET_PRODUCTS_SUCCESS_ACTION,
	GET_PRODUCTS_ERROR_ACTION,
	GET_SINGLE_PRODUCT_BEGIN_ACTION,
	GET_SINGLE_PRODUCT_SUCCESS_ACTION,
	GET_SINGLE_PRODUCT_ERROR_ACTION,
} from "../actions";

const initialState = { isSidebarOpen: false };

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const openSidebar = () => dispatch(SIDEBAR_OPEN_ACTION());
	const closeSidebar = () => dispatch(SIDEBAR_CLOSE_ACTION());
	return (
		<ProductsContext.Provider value={{ state, dispatch }}>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
