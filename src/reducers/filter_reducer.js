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
			return {
				...state,
				filtered_products: [...payload],
				all_products: [...payload],
			};
		case SET_GRIDVIEW:
			newState.gridView = true;
			return newState;
		case SET_LISTVIEW:
			newState.gridView = false;
			return newState;
		case UPDATE_SORT:
			newState.sort = payload;
			return newState;
		case SORT_PRODUCTS:
			switch (state.sort) {
				case "name-a":
					newState.filtered_products =
						newState.filtered_products.sort();
					return newState;
				case "name-z":
					newState.filtered_products = newState.filtered_products
						.sort()
						.reverse();
					return newState;
				case "price-lowest":
					newState.filtered_products =
						newState.filtered_products.sort(
							(a, b) => a.price - b.price
						);
					return newState;
				case "price-higest":
					newState.filtered_products = newState.filtered_products
						.sort((a, b) => a.price - b.price)
						.reverse();
					return newState;
			}
	}
	throw new Error(`No Matching "${type}" - action type`);
};

export default filter_reducer;
