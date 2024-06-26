import React from 'react';

const SearchSection = ({ searchTerm, setSearchTerm, handleSearch }) => {
	return (
		<section className='search-section mb-8 flex justify-center items-center'>
			<input
				className='border-2 py-2 w-[400px] rounded-lg text-lg focus:outline-orange-300'
				type='search'
				placeholder='Search for chicken biryani...'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button
				className='bg-orange-500 text-white ml-2 py-2 px-4 rounded-lg'
				onClick={handleSearch}>
				Search
			</button>
		</section>
	);
};

export default SearchSection;
