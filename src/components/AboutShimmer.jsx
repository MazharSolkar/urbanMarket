import React from 'react';

const AboutShimmer = () => {
	return (
		<>
			<div className='blinking w-[400px] h-[500px] mx-auto bg-gray-400 rounded-lg'></div>
			<p className='mt-12 text-xl text-center text-gray-400 bg-gray-400'>
				I am a{' '}
				<button className='frontend-dev-text bg-gray-400 text-gray-400 px-1 shine'>
					frontend developer
				</button>{' '}
				who loves turning ideas into stunning and user-friendly digital
				experiences. I have a strong eye for design and use the latest
				technologies to create smooth and engaging interfaces.{' '}
			</p>
		</>
	);
};

export default AboutShimmer;
