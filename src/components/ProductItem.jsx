import React from 'react';
import { Link } from 'react-router-dom';
import { centToRs } from '../utils/utils.mjs';

const ProductItem = ({ id, name, image, price }) => {
	return (
		<Link to={`/product/${id}`}>
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

					<button className='add-to-cart self-center w-1/2 bg-orange-500 text-white px-2 my-2 rounded-lg'>
						Add
					</button>
				</div>
			</article>
		</Link>
	);
};

export default ProductItem;
