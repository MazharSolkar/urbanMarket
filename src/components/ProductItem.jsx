import React from 'react';
import { Link } from 'react-router-dom';
import { centToRs } from '../utils/utils.mjs';
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const ProductItem = ({ id, name, image, price, company }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (event) => {
		event.preventDefault();
		dispatch(add({ id, name, image, price, company, count: 1 }));
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
							className='add-to-cart self-center w-1/2 bg-orange-500 text-white px-2 my-2 rounded-lg'
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

export default ProductItem;
