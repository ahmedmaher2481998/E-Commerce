import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
	return (
		<Wrapper>
			<div className='stars'>
				<span>{generatStarsArray(stars)}</span>
			</div>
			<p>({reviews} customers review)</p>
		</Wrapper>
	);
};

const generatStarsArray = (rate = 0) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rate) {
			stars.push(<BsStarFill key={i} />);
		} else if (i - 0.5 <= rate) stars.push(<BsStarHalf key={i} />);
		else stars.push(<BsStar key={i} />);
	}
	return stars;
};
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #ffb900;
		font-size: 1rem;
		margin-right: 0.25rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`;
export default Stars;
