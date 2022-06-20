import { GiBrokenSkull } from "react-icons/gi";
import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, { type, payload }) => {
	let newState = { ...state };
	switch (type) {
		case LOAD_PRODUCTS:
			let prices = payload.map((p) => p.price);
			newState.filters.maxPrice = Math.max(...prices);
			newState.filters.price = Math.max(...prices);
			return {
				...newState,
				filtered_products: [...payload],
				all_products: [...payload],
			};
		case SET_GRIDVIEW:
			newState.gridView = true;
			return newState;
		case UPDATE_FILTERS:
			const { name, value } = payload;
			newState.filters[name] = value;
			return newState;
		case SET_LISTVIEW:
			newState.gridView = false;
			return newState;
		case UPDATE_SORT:
			newState.sort = payload;
			return newState;
		case SORT_PRODUCTS:
			let newFilterProducts = newState.filtered_products;
			switch (state.sort) {
				case "name-a":
					newState.filtered_products = newFilterProducts.sort(
						(a, b) => a.name.localeCompare(b.name)
					);
					break;
				case "name-z":
					newState.filtered_products = newFilterProducts.sort(
						(a, b) => b.name.localeCompare(a.name)
					);

					break;
				case "price-lowest":
					newState.filtered_products = newFilterProducts.sort(
						(a, b) => a.price - b.price
					);
					break;
				case "price-higest":
					newState.filtered_products = newFilterProducts.sort(
						(a, b) => b.price - a.price
					);

					break;
			}
			return newState;
		case FILTER_PRODUCTS:
			return newState;
	}
	throw new Error(`No Matching "${type}" - action type`);
};

export default filter_reducer;
