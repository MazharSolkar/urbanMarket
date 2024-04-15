import React from 'react';
import './App.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import NavbarLayout from './components/NavbarLayout';
import ErrorElement from './components/ErrorElement';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<NavbarLayout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='cart' element={<Cart />} />
				<Route path='product/:id' element={<ProductDetails />} />
				<Route path='*' element={<ErrorElement />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};

export default App;
