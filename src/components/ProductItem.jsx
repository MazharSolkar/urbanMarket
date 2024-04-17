import React from 'react';
import { Link } from 'react-router-dom';
import { centToRs } from '../utils/utils.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

const ProductItem = ({ id, name, image, price, company }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartSlice.cartItems);
	console.log(cartItems);

	const handleAddToCart = (event) => {
		event.preventDefault();
		const inBasket = cartItems.find((cartItem) => cartItem.id === id);
		inBasket
			? toast('Item is already in the cart')
			: dispatch(
					add({ id, name, image, price, company, count: 1 }),
					toast.success('item is added to cart')
			  );
	};

	return (
		<Link to={`/product/${id}`}>
			<>
				<article className='shadow-lg border' key={id}>
					<img
						className='w-full aspect-[2/1] rounded-lg object-cover'
						src={image}
						alt='product_image'
					/>
					<div className='item-details p-1 text-lg flex flex-col'>
						<div className='item-details-header font-medium flex justify-between'>
							<h1 className='my-1 '>{name}</h1>
							<p className='price'>{centToRs(price)}</p>
						</div>

						<button
							className='add-to-cart self-center w-1/2 bg-orange-500 text-white px-2 my-2 rounded-lg hover:bg-white hover:text-orange-500 hover border border-orange-500'
							onClick={(event) => {
								handleAddToCart(event);
							}}>
							Add
						</button>
					</div>
				</article>
			</>
		</Link>
	);
};

export const FeaturedProductItem = (WrappedComponent) => {
	return (props) => {
		return (
			<div className='relative'>
				<WrappedComponent {...props} />
				<button className='featured-btn text-white bg-black p-1 rounded-lg absolute top-0 right-0'>
					promoted
				</button>
			</div>
		);
	};
};

export default ProductItem;
