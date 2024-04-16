import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cartItems = useSelector((state) => state.cartSlice.cartItems);
	return (
		<section className='cartItems-container'>
			<h1 className='cart-title text-3xl font-bold mb-8'>Cart</h1>
			<div className='cart-item-container flex flex-col gap-4 justify-center items-center'>
				{cartItems.map((cartItem) => (
					<CartItem
						key={cartItem.id}
						id={cartItem.id}
						name={cartItem.name}
						company={cartItem.company}
						price={cartItem.price}
						img={cartItem.img}
						count={cartItem.count}
					/>
				))}
			</div>
		</section>
	);
};

export default Cart;
