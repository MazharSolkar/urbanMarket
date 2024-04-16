import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarLayout = () => {
	const [isOpen, setisOpen] = useState(false);
	const totalItem = useSelector((state) => state.cartSlice.cartItems.length);

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Cart', path: '/cart' },
	];

	return (
		<>
			<div className='bg-white fixed w-full top-0 left-[50%] translate-x-[-50%]  z-10 shadow-lg text-gray-800'>
				<nav className='md:flex justify-between items-center max-w-screen-xl mx-auto'>
					<div className='header flex justify-between items-center py-2'>
						<h1 className='text-2xl font-bold flex justify-center items-center gap-2 relative'>
							Urban Market
							<Link to='/cart'>
								<MdShoppingCart className='text-4xl text-orange-400 cursor-pointer' />
							</Link>
							<span className='absolute top-[-8px] right-[-17px] bg-red-400 text-white rounded-full px-[2px] h-6 w-6 flex justify-center items-center'>
								{totalItem}
							</span>
						</h1>

						<div
							className='burger text-2xl md:hidden'
							onClick={() => setisOpen(!isOpen)}>
							{isOpen ? <IoClose /> : <CiMenuBurger />}
						</div>
					</div>
					<ul
						className={`w-full md:w-auto md:flex text-xl font-semibold absolute z-20 md:static ${
							isOpen ? 'top-[40px]' : 'top-[-220px]'
						} transition-all ease-in delay-300 `}>
						{links.map((link) => (
							<NavLink
								className={({ isActive }) => (isActive ? 'underline' : '')}
								to={link.path}
								key={link.name}>
								<p className='my-2 py-1 md:mx-2 md:px-2 md:py-1 hover:underline'>
									{link.name}
								</p>
							</NavLink>
						))}
					</ul>
				</nav>
			</div>

			<section className='app-container mt-24 mx-auto w-[97vw] max-w-screen-xl text-gray-800'>
				<Outlet />
			</section>
		</>
	);
};

export default NavbarLayout;
