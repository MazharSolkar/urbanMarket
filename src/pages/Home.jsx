// import React, { useEffect, useState } from 'react';
// import useFetch from '../hooks/useFetch';

// import { PRODUCTS_URL } from '../utils/utils';
// import { Link } from 'react-router-dom';
// import { RiH1 } from 'react-icons/ri';

// const Home = () => {
// 	const { data } = useFetch(PRODUCTS_URL);
// 	const [products, setProducts] = useState(null);
// 	const [searchTerm, setsearchTerm] = useState('');
// 	// console.log('data: ', data);

// 	useEffect(() => {
// 		if (data) {
// 			setProducts(data);
// 		}
// 	}, [data]);

// 	const handleSearch = () => {
// 		if (!products) {
// 			setProducts(data);
// 			return;
// 		} else {
// 			const filtered = data.filter((product) =>
// 				product.name.toLowerCase().includes(searchTerm.toLowerCase())
// 			);
// 			setProducts(filtered);
// 		}
// 	};

// 	if (!data) return <h2>Plz wait loading...</h2>;

// 	return (
// 		<>
// 			{/* SEARCH SECTION */}
// 			<section className='search-section mb-8 flex justify-center items-center'>
// 				<input
// 					className='border-2 py-2 w-[400px] rounded-lg text-lg'
// 					type='search'
// 					placeholder='Search for chicken biryani...'
// 					onChange={(e) => setsearchTerm(e.target.value)}
// 				/>
// 				<button
// 					className='bg-orange-400 text-white ml-2 py-2 px-4 rounded-lg'
// 					onClick={handleSearch}>
// 					Search
// 				</button>
// 			</section>
// 			{/* PRODUCTS SECTION */}
// 			<section className='products-container grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
// 				{products && products.length > 0 ? (
// 					products.map((product) => {
// 						const { id, name, price, image, shipping } = product;
// 						return (
// 							<Link to={`/product/${id}`} key={id}>
// 								<article className='shadow-lg' key={id}>
// 									<img
// 										className='w-full aspect-[2/1] rounded-lg object-cover'
// 										src={image}
// 										alt='product_image'
// 									/>
// 									<h1 className='my-2'>{name}</h1>
// 								</article>
// 							</Link>
// 						);
// 					})
// 				) : (
// 					<h1>No such product found</h1>
// 				)}
// 			</section>
// 		</>
// 	);
// };

// export default Home;

// Home.jsx
import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { PRODUCTS_URL } from '../utils/utils';
import SearchSection from '../components/SearchSection';
import ProductItem from '../components/ProductItem';

const Home = () => {
	const { data } = useFetch(PRODUCTS_URL);
	const [products, setProducts] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		if (data) {
			setProducts(data);
		}
	}, [data]);

	const handleSearch = () => {
		if (!products) {
			setProducts(data);
			return;
		} else {
			const filtered = data.filter((product) =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setProducts(filtered);
		}
	};

	if (!data) return <h2>Plz wait loading...</h2>;

	return (
		<>
			<SearchSection
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				handleSearch={handleSearch}
			/>
			<section className='products-container grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{products && products.length > 0 ? (
					products.map((product) => (
						<ProductItem
							key={product.id}
							id={product.id}
							name={product.name}
							image={product.image}
						/>
					))
				) : (
					<h1>No such product found</h1>
				)}
			</section>
		</>
	);
};

export default Home;
