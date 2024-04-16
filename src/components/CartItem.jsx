import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartItem = () => {
	return (
		<section>
			<h1 className='cart-title text-3xl font-bold mb-8'>Cart</h1>
			<div className='cart-item-container'>
				<article className='cart-item flex gap-8'>
					{/* image */}
					<img
						className='h-40 w-52 object-cover rounded-lg'
						src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/6/030e00df-5de4-4e88-bd5d-f0dc5a82d3d4_cc0a9242-24e8-4ecc-a74b-291e219836b8_compressed'
						alt=''
					/>
					{/* item details container */}
					<div className='item-details text-lg'>
						<h1 className='font-semibold text-xl'>
							Kebabs in a box (company name)
						</h1>
						<p>
							<span className='font-medium'>$2888</span> (price * count)
						</p>
						<div className='flex justify-between items-center'>
							<div className='btn-container flex gap-2 my-2'>
								<button className='decrease bg-orange-400 text-white rounded-lg p-2'>
									<FaMinus />
								</button>
								<p className='item-count font-medium'>0</p>
								<button className='increase bg-orange-400 text-white rounded-lg p-2'>
									<FaPlus />
								</button>
							</div>
							<button className='remove text-orange-400 border border-orange-400 rounded-lg px-2 py-1'>
								remove
							</button>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default CartItem;
