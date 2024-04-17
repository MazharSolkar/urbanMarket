import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { decrease, increase, remove } from '../features/cart/cartSlice';

const CartItem = ({ id, name, company, price, img, count }) => {
	const dispatch = useDispatch();
	return (
		<>
			<article className='cart-item flex gap-8 w-[500px] p-2 rounded-lg border shadow-lg'>
				{/* image */}
				<div className='img-container h-40 w-72 '>
					<img
						className='w-full h-full object-cover rounded-lg'
						src={img}
						alt='cartItem_image'
					/>
				</div>
				{/* item details container */}
				<div className='item-details text-lg w-full'>
					<h1 className='font-semibold text-xl'>
						{name} ({company})
					</h1>
					<p>
						<span className='font-medium'>₹ {price * count}</span> ({price} X{' '}
						{count})
					</p>
					<div className='flex justify-between items-center'>
						<div className='btn-container flex gap-2 my-2'>
							<button
								className={`decrease  text-white rounded-lg p-2 ${
									count < 2 ? 'bg-orange-300' : 'bg-orange-500'
								}`}
								onClick={() => {
									dispatch(decrease(id));
								}}>
								<FaMinus />
							</button>
							<p className='item-count font-medium'>{count}</p>
							<button
								className='increase bg-orange-500  text-white  rounded-lg p-2'
								onClick={() => {
									dispatch(increase(id));
								}}>
								<FaPlus />
							</button>
						</div>
						<button
							className='remove text-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500 rounded-lg px-2 py-1'
							onClick={() => {
								dispatch(remove(id));
							}}>
							remove
						</button>
					</div>
				</div>
			</article>
		</>
	);
};

export default CartItem;
