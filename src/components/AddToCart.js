import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
	const { id, stock, colors } = product;

	const { addToCart } = useCartContext();

	const [color, setColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((old) => {
			let newAmount = old + 1;
			return newAmount > stock ? stock : newAmount;
		});
	};
	const decrease = () => {
		setAmount((old) => {
			let newAmount = old - 1;
			return newAmount < 1 ? 1 : newAmount;
		});
	};

	return (
		<Wrapper>
			<div className='colors'>
				<span>Colors: </span>
				<div>
					{colors.map((currColor, i) => {
						return (
							<button
								key={i}
								style={{ backgroundColor: currColor }}
								onClick={() => setColor(currColor)}
								className={`color-btn ${currColor === color ? "active" : null}`}
							>
								{currColor === color ? <FaCheck /> : null}
							</button>
						);
					})}
				</div>
			</div>
			<div className='btn-container'>
				<AmountButtons
					amount={amount}
					decrease={decrease}
					increase={increase}
				/>
				<Link
					to={"/cart"}
					className='btn'
					onClick={() => {
						addToCart({ id, color, amount, product });
					}}
				>
					Add To Cart
				</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 2rem;
	.colors {
		display: grid;
		grid-template-columns: 125px 1fr;
		align-items: center;
		margin-bottom: 1rem;
		span {
			text-transform: capitalize;
			font-weight: 700;
		}
		div {
			display: flex;
		}
	}
	.color-btn {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.75rem;
			color: var(--clr-white);
		}
	}
	.active {
		opacity: 1;
	}
	.btn-container {
		margin-top: 2rem;
	}

	.btn {
		margin-top: 1rem;
		width: 140px;
	}
`;
export default AddToCart;
