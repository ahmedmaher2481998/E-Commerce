import React from "react";
import styled from "styled-components";
// eslint-disable-next-line
import { PageHero, StripeCheckout } from "../components";
// extra imports
// eslint-disable-next-line
import { useCartContext } from "../context/cart_context";
// eslint-disable-next-line
import { Link } from "react-router-dom";

const CheckoutPage = () => {
	return (
		<>
			<StripeCheckout />
		</>
	);
};
//eslint-disable-next-line
const Wrapper = styled.div``;
export default CheckoutPage;
