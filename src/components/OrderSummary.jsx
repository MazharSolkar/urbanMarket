import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
	const cartItems = useSelector((state) => state.cartSlice.cartItems);
	const price = useSelector((state) => state.cartSlice.price);
	const discount = useSelector((state) => state.cartSlice.discount);
	const deliveryCharges = useSelector(
		(state) => state.cartSlice.deliveryCharges
	);

	const discountPrice = Math.ceil(price * discount);
	const uiDeliveryCharges = Math.ceil(
		discountPrice + discountPrice * deliveryCharges
	);

	const uiTotalAmount = price - discountPrice + uiDeliveryCharges;

	return (
		<>
			<h1 className='text-3xl font-medium mb-6'>Order Summary</h1>
			<div className='summary-details p-2 mt-2 text-xl font-medium flex flex-col gap-4 border-y border-gray-400 '>
				{/* Price */}
				<div className='flex justify-between '>
					<h2 className='price'>Price ({cartItems.length} items)</h2>
					<p className='price'>{price}</p>
				</div>
				{/* Discount */}
				<div className='flex justify-between'>
					<h2 className='discount'>Discount ({discount * 100}%)</h2>
					<p className='discount'>- {discountPrice}</p>
				</div>
				{/* Delivery Charges */}
				<div className='flex justify-between'>
					<h2 className='discount'>
						Delivery Charges ({deliveryCharges * 100}%)
					</h2>
					<p className='delivery charges'>+ {uiDeliveryCharges}</p>
				</div>
			</div>
			{/* Savings */}
			<div className='flex justify-between text-lg p-2 mt-1 font-normal text-gray-700'>
				You'll save {discountPrice} on this order 🎉
			</div>
			{/* Total Amount */}
			<div className='flex justify-between text-xl px-2 font-medium'>
				<h2 className='total-amount'>Total Amount ({discount * 100}%)</h2>
				<p className='total-amount text-orange-500'>{uiTotalAmount}</p>
			</div>
			<button className='bg-orange-500 text-xl text-white rounded-lg py-2 px-2 w-full mt-4'>
				Place Order
			</button>
		</>
	);
};

export default OrderSummary;
