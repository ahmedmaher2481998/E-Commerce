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
				default:
					break;
			}
			return newState;
		case CLEAR_FILTERS:
			newState.filters = {
				...newState.filters,
				text: "",
				company: "all",
				category: "all",
				color: "all",
				price: newState.filters.maxPrice,
				shipping: false,
			};
			return newState;

		case FILTER_PRODUCTS:
			const { all_products, filters } = newState;
			const { text, company, category, color, price, shipping } = filters;
			let temp = [...all_products];
			if (text !== "") {
				temp = temp.filter((p) =>
					p.name.toLowerCase().startsWith(text)
				);
			}
			if (company !== "all") {
				temp = temp.filter((p) => p.company === company);
			}
			if (category !== "all") {
				temp = temp.filter((p) => p.category === category);
			}
			if (shipping) {
				temp = temp.filter((p) => p.shipping);
			}
			if (color !== "all") {
				temp = temp.filter((p) => p.colors.includes(color));
			}
<<<<<<< HEAD
			if (price != maxPrice) {
				temp = temp.filter((p) => p.price < price);
			}
=======
			temp = temp.filter((p) => p.price <= price);
>>>>>>> dev
			newState.filtered_products = [...temp];
			return newState;
		default:
			return newState;
	}
};

export default filter_reducer;
