//action Names
export const SIDEBAR_OPEN = "SIDEBAR_OPEN";
export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE";
export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_SINGLE_PRODUCT_BEGIN = "GET_SINGLE_PRODUCT_BEGIN";
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";
export const GET_SINGLE_PRODUCT_ERROR = "GET_SINGLE_PRODUCT_ERROR";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const SET_GRIDVIEW = "SET_GRIDVIEW";
export const SET_LISTVIEW = "SET_LISTVIEW";
export const UPDATE_SORT = "UPDATE_SORT";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM_AMOUNT = "TOGGLE_CART_ITEM_AMOUNT";
export const CLEAR_CART = "CLEAR_CART";
export const COUNT_CART_TOTALS = "COUNT_CART_TOTALS";
//actions
export const SIDEBAR_OPEN_ACTION = () => {
	return { type: "SIDEBAR_OPEN" };
};
export const SIDEBAR_CLOSE_ACTION = () => {
	return { type: "SIDEBAR_CLOSE" };
};
export const GET_PRODUCTS_BEGIN_ACTION = () => {
	return { type: "GET_PRODUCTS_BEGIN" };
};
export const GET_PRODUCTS_SUCCESS_ACTION = () => {
	return { type: "GET_PRODUCTS_SUCCESS" };
};
export const GET_PRODUCTS_ERROR_ACTION = () => {
	return { type: "GET_PRODUCTS_ERROR" };
};
export const GET_SINGLE_PRODUCT_BEGIN_ACTION = () => {
	return { type: "GET_SINGLE_PRODUCT_BEGIN" };
};
export const GET_SINGLE_PRODUCT_SUCCESS_ACTION = () => {
	return { type: "GET_SINGLE_PRODUCT_SUCCESS" };
};
export const GET_SINGLE_PRODUCT_ERROR_ACTION = () => {
	return { type: "GET_SINGLE_PRODUCT_ERROR" };
};
export const LOAD_PRODUCTS_ACTION = () => {
	return { type: "LOAD_PRODUCTS" };
};
export const SET_GRIDVIEW_ACTION = () => {
	return { type: "SET_GRIDVIEW" };
};
export const SET_LISTVIEW_ACTION = () => {
	return { type: "SET_LISTVIEW" };
};
export const UPDATE_SORT_ACTION = () => {
	return { type: "UPDATE_SORT" };
};
export const SORT_PRODUCTS_ACTION = () => {
	return { type: "SORT_PRODUCTS" };
};
export const UPDATE_FILTERS_ACTION = () => {
	return { type: "UPDATE_FILTERS" };
};
export const FILTER_PRODUCTS_ACTION = () => {
	return { type: "FILTER_PRODUCTS" };
};
export const CLEAR_FILTERS_ACTION = () => {
	return { type: "CLEAR_FILTERS" };
};
export const ADD_TO_CART_ACTION = () => {
	return { type: "ADD_TO_CART" };
};
export const REMOVE_CART_ITEM_ACTION = () => {
	return { type: "REMOVE_CART_ITEM" };
};
export const TOGGLE_CART_ITEM_AMOUNT_ACTION = () => {
	return { type: "TOGGLE_CART_ITEM_AMOUNT" };
};
export const CLEAR_CART_ACTION = () => {
	return { type: "CLEAR_CART" };
};
export const COUNT_CART_TOTALS_ACTION = () => {
	return { type: "COUNT_CART_TOTALS" };
};
