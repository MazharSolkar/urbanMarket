import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, image }) => {
	return (
		<Link to={`/product/${id}`}>
			<article className='shadow-lg' key={id}>
				<img
					className='w-full aspect-[2/1] rounded-lg object-cover'
					src={image}
					alt='product_image'
				/>
				<h1 className='my-2'>{name}</h1>
			</article>
		</Link>
	);
};

export default ProductItem;
