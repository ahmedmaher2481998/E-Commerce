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
	//add item to cart
	const addToCart = ({ id, color, amount, product }) => {
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
	//remove item from cart
	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
	};
	//inc/dec the amount
	const toggleAmount = (id, value) => {
		dispatch({
			type: TOGGLE_CART_ITEM_AMOUNT,
			payload: {
				id,
				value,
			},
		});
	};
	//clear all products in the  cart
	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
		dispatch({ type: COUNT_CART_TOTALS });
		console.log("cart changed ..... ");
	}, [state.cart.length, state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				toggleAmount,
				removeItem,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
// getting the context used
export const useCartContext = () => {
	return useContext(CartContext);
};
