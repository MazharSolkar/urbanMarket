import React from 'react';
import { Link } from 'react-router-dom';
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
					{cartItems.length < 1 ? (
						<div className='flex flex-col justify-center items-center'>
							<h1 className='text-4xl font-normal'>your cart is empty 😄</h1>
							<Link to='/'>
								<button className='bg-orange-500 text-white ml-2 py-2 px-4 rounded-lg mt-4 '>
									Add Some Products
								</button>
							</Link>
						</div>
					) : (
						cartItems.map((cartItem) => (
							<CartItem
								key={cartItem.id}
								id={cartItem.id}
								name={cartItem.name}
								company={cartItem.company}
								price={cartItem.price}
								img={cartItem.image}
								count={cartItem.count}
							/>
						))
					)}
				</div>
				<div className='order-summary-container w-[500px] mx-auto'>
					{cartItems.length >= 1 && <OrderSummary />}
				</div>
			</section>
		</>
	);
};

export default Cart;
