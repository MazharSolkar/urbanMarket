import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
	const cartItems = useSelector((state) => state.cartSlice.cartItems);

	return (
		<>
			<h1 className='cart-title text-3xl font-bold mb-8 text-center'>Cart</h1>
			<section className='cartItems-container lg:flex'>
				<div className='cart-item-container flex flex-col gap-4 justify-center items-center mb-4'>
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
				<div className='order-summary-container w-[500px] mx-auto'>
					<OrderSummary />
				</div>
			</section>
		</>
	);
};

export default Cart;
