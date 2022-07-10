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
	const { cart } = useCartContext();
	return (
		<main>
			<PageHero title='checkout' />
			<Wrapper className='page'>
				{cart.length < 1 ? (
					<div className='empty'>
						<h2>your cart is empty</h2>
						<Link to='/products' className='btn'>
							fill it
						</Link>
					</div>
				) : (
					<StripeCheckout />
				)}
			</Wrapper>
		</main>
	);
};

//eslint-disable-next-line
const Wrapper = styled.div``;
export default CheckoutPage;
