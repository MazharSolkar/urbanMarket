import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';

const NavFooterLayout = () => {
	return (
		<>
			<Navbar />
			<section className='app-container mt-24 mx-auto px-1 w-[97vw] max-w-screen-xl text-gray-800'>
				<Outlet />
				<div className='relative top-[10vh]'>
					<Footer />
				</div>
			</section>
		</>
	);
};

export default NavFooterLayout;
