import './blinkAnimation.css';

const HomeShimmer = () => {
	const cards = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];
	const decoration = {};
	return (
		<section>
			<div className='search-shimmer blinking mb-8 flex justify-center items-center'>
				<p className=' py-6 w-[400px] rounded-lg bg-gray-300' />
				<button className='blinking bg-gray-300 text-gray-300 ml-2 py-2 px-4 rounded-lg'>
					Search
				</button>
			</div>

			<div className='cards-container-shimmer grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{cards.map((card, index) => (
					<article
						key={index}
						className='shimmer-card blinking bg-gray-300 p-10 py-14 rounded-lg'
					/>
				))}
			</div>
		</section>
	);
};

export default HomeShimmer;
