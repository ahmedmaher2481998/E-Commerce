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
			return newState;
	}
	throw new Error(`No Matching "${type}" - action type`);
};

export default filter_reducer;
