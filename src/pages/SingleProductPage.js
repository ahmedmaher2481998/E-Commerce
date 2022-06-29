import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import {
	single_product_url,
	single_product_url as url,
} from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
	Loading,
	Error,
	ProductImages,
	AddToCart,
	Stars,
	PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
	//consts
	const { id } = useParams("id");
	const history = useHistory();
	const {
		single_product_loading: loading,
		single_product_error: error,
		single_product: product,
		getSingleProducts,
	} = useProductsContext();
	useEffect(() => {
		let myUrl = `${single_product_url}${id}`;
		getSingleProducts(myUrl);
	}, [id]);

	//automatically redirect to home page
	useEffect(() => {
		let a;
		if (error) {
			a = setTimeout(history.push("/"));
		}
		return clearTimeout(a);
	}, [error]);

	//checking for the succes of the ajax call
	if (loading) return <Loading />;
	else if (error) return <Error />;
	const {
		name,
		price,
		description,
		stock,
		reviews,
		stars,
		id: productId,
		company,
		images,
	} = product;
	return (
		<Wrapper>
			<PageHero title={name} product />
			<div className='section section-center page'>
				<Link to='/products' className='btn'>
					Back to Products
				</Link>
				<div className='product-center'>
					<ProductImages images={images} />
					<section className='content'>
						<h2>{name}</h2>
						<Stars reviews={reviews} stars={stars} />
						<h5 className='price'>{formatPrice(price)}</h5>

						<p className='desc'>{description}</p>
						<p className='info'>
							<span>Avaliable:</span>
							{stock > 0 ? "Avilable" : "Out of stock"}
						</p>
						<p className='info'>
							<span>Sku:</span>
							{productId}
						</p>
						<p className='info'>
							<span>Brand:</span>
							{company}
						</p>
						<hr />
						{stock > 0 && <AddToCart product={product} />}
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}

	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleProductPage;
