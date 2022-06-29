import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorageCart = () => {
	let cart = localStorage.getItem("cart");
	if (cart) {
		cart = JSON.parse(cart);
		return cart;
	} else return [];
};

const initialState = {
	cart: getLocalStorageCart(),
	totalItems: 0,
	totalAmount: 0,
	shippingFee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (id, color, amount, product) => {
		dispatch({
			type: ADD_TO_CART,
			payload: {
				id,
				color,
				amount,
				product,
			},
		});
	};

	const removeItme = (id) => {};

	const toggleAmount = (id, value) => {};

	const cleaCart = () => {};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state]);
	return (
		<CartContext.Provider value={{ ...state, addToCart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
