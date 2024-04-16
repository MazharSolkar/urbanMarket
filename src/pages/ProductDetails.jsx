import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { SINGLE_PRODUCTS_URL } from '../utils/utils';
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const ProductDetails = () => {
	const { id } = useParams();
	const { data, loading } = useFetch(`${SINGLE_PRODUCTS_URL}${id}`);
	// console.log(data);

	const dispatch = useDispatch();

	if (loading) return <h1>Loading...</h1>;
	const { name, company, price, description, images } = data;
	const img = images[0].url;

	return (
		<section className='single-products-page-container lg:flex lg:justify-center items-center lg:gap-16'>
			<img
				className='rounded-lg w-full h-[400px] aspect-[8/8] lg:aspect-[4/3]'
				src={img}
				alt=''
			/>

			<div className='products-details mt-2 lg:mt-0'>
				<h1 className='text-4xl font-bold pb-2'>{name}</h1>

				<h2 className='text-3xl font-semibold pb-2'>{company}</h2>
				<h3 className='text-xl font-semibold pb-2'>$ {price}</h3>
				<p className='my-2'>{description}</p>
				<button
					className='text-xl font-semibold text-white bg-orange-400 py-2 px-4 rounded-lg mt-2'
					onClick={() => {
						dispatch(add({ id, name, company, price, img, count: 1 }));
					}}>
					Add To Cart
				</button>
			</div>
		</section>
	);
};

export default ProductDetails;
