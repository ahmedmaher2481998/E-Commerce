import {
	ADD_TO_CART,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, { type, payload }) => {
	const newState = { ...state };
	switch (type) {
		case ADD_TO_CART:
			const { id, color, amount, product } = payload;
			let tempItme = newState.cart.find((i) => i.id == id + color);
			if (tempItme) {
				const tempCart = newState.cart.map((i) => {
					if (i.id === id + color) {
						let newAmount = i.amount + amount;
						if (newAmount > i.max) {
							newAmount = i.max;
						}
						return i;
					} else return i;
				});
				newState.cart = [...tempCart];
			} else {
				const newItem = {
					id: id + color,
					name: product.name,
					color,
					amount,
					price: product.price,
					max: product.stock,
					image: product.images[0].url,
				};
				newState.cart.push(newItem);
			}
			return newState;
	}
	throw new Error(`No Matching "${type}" - action type`);
};

export default cart_reducer;
