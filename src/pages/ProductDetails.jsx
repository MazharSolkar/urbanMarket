import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { SINGLE_PRODUCTS_URL } from '../utils/utils.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cart/cartSlice';
import { centToRs } from '../utils/utils.mjs';
import { toast } from 'react-toastify';

const ProductDetails = () => {
	const { id } = useParams();
	const { data, loading } = useFetch(`${SINGLE_PRODUCTS_URL}${id}`);
	// console.log(data);
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartSlice.cartItems);

	if (!data)
		return (
			<section className='lg:flex lg:justify-center items-center lg:gap-16 text-gray-400  blinking'>
				<div className='image w-full h-[400px] bg-gray-400 rounded-lg' />
				<div className='product-details mt-2 lg:mt-0'>
					<h1 className='text-4xl font-bold mb-2 bg-gray-400'>name</h1>

					<h2 className='text-3xl font-semibold mb-2 bg-gray-400'>company</h2>
					<h3 className='text-xl font-semibold mb-2 bg-gray-400'>price</h3>
					<p className='my-2 bg-gray-400'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
						nesciunt! Repellendus error, quas eius assumenda, quisquam fuga
						soluta perspiciatis atque aperiam molestias ad?
					</p>
					<button className='text-xl bg-gray-400 font-semibold py-2 px-4 rounded-lg mt-2'>
						Add To Cart
					</button>
				</div>
			</section>
		);

	const { name, company, price, description, images } = data;
	const img = images[0].url;

	const handleClick = () => {
		const inBasket = cartItems.find((cartItem) => cartItem.id === id);
		inBasket
			? toast('Item is already in the cart')
			: dispatch(
					add({ id, name, img, price, company, count: 1 }),
					toast.success('item is added to cart')
			  );
	};

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
				<h3 className='text-xl font-semibold pb-2'>{centToRs(price)}</h3>
				<p className='my-2'>{description}</p>
				<button
					className='text-xl font-semibold text-white bg-orange-400 py-2 px-4 rounded-lg mt-2'
					onClick={() => {
						handleClick();
					}}>
					Add To Cart
				</button>
			</div>
		</section>
	);
};

export default ProductDetails;
