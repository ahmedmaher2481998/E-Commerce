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
		case CLEAR_CART:
			newState.cart = [];
			return newState;
		case REMOVE_CART_ITEM:
			newState.cart = newState.cart.filter(
				(item) => item.id !== payload.id
			);
			return newState;
		case TOGGLE_CART_ITEM_AMOUNT:
			newState.cart = newState.cart.map((item) => {
				if (item.id === payload.id) {
					if (payload.value === "inc") {
						let newAmount = item.amount + 1;
						if (newAmount > item.max) {
							newAmount = item.max;
						}
						item.amount = newAmount;
						return item;
					} else if (payload.value === "dec") {
						let newAmount = item.amount - 1;
						if (newAmount < 1) {
							newAmount = 1;
						}
						item.amount = newAmount;
						return item;
					}
				} else return item;
			});
			return newState;
		case COUNT_CART_TOTALS:
			const { totalAmount, totalItems } = newState.cart.reduce(
				(total, item) => {
					const { price, amount } = item;
					total.totalAmount += price * amount;
					total.totalItems += amount;
					return total;
				},
				{ totalAmount: 0, totalItems: 0 }
			);
			newState.totalAmount = totalAmount;
			newState.totalItems = totalItems;
			return newState;
	}
	throw new Error(`No Matching "${type}" - action type`);
};

export default cart_reducer;
