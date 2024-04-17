import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { PRODUCTS_URL } from '../utils/utils.mjs';
import SearchSection from '../components/SearchSection';
import ProductItem from '../components/ProductItem';
import HomeShimmer from '../components/HomeShimmer';

const Home = () => {
	const { data } = useFetch(PRODUCTS_URL);
	const [products, setProducts] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	console.log(data);
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

	if (!data) return <HomeShimmer />;

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
							company={product.company}
							price={product.price}
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
