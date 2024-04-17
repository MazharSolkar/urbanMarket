import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { GITHUB_USER_URL } from '../utils/utils.mjs';

const About = () => {
	const { data } = useFetch(GITHUB_USER_URL);
	console.log(data);
	const [user, setuser] = useState('');
	useEffect(() => {
		if (data) {
			setuser(data);
		}
	}, [data]);

	if (!data)
		return (
			<div className='blinking w-[400px] h-[500px] mx-auto bg-gray-400 rounded-lg'></div>
		);

	return (
		<div>
			<img
				className='object-cover block mx-auto rounded-lg'
				src={user.avatar_url}
				alt=''
			/>
			<p className='mt-12 text-xl text-center text-gray-800'>
				I am a{' '}
				<span className='frontend-dev-text bg-orange-500 text-white px-1 blinking'>
					frontend developer
				</span>{' '}
				🚀 who loves turning ideas into stunning and user-friendly digital
				experiences.🎨 I have a strong eye for design and use the latest
				technologies to create smooth and engaging interfaces.{' '}
			</p>
		</div>
	);
};

export default About;
