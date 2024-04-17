import React from 'react';
import {
	BiLogoGithub,
	BiLogoGmail,
	BiLogoInstagramAlt,
	BiLogoLinkedin,
} from 'react-icons/bi';

const Footer = () => {
	return (
		<footer className='mt-16 flex flex-col justify-center items-center text-gray-800 border-t-2 border-gray-200 py-2'>
			<p className='text-2xl font-semibold'>
				Made with love <span style={{ color: 'red' }}>&#10084;</span> By Mazhar
				Solkar
			</p>
			<p className='py-1'>Don't be stranger connect with me</p>

			<div className='h-[1px] w-8/12 my-1 bg-gray-200' />

			<div className='footer-contact flex gap-4 m-1 text-2xl'>
				<a
					href='https://www.instagram.com/lone_wolf_09n/'
					target='blank'
					className='social-icon'>
					<BiLogoInstagramAlt className='instagram hover:text-pink-400 ' />
				</a>
				<a
					href='https://www.linkedin.com/in/mazhar-solkar-33b6ab16b/'
					target='blank'
					className='social-icon'>
					<BiLogoLinkedin className='linkedin hover:text-blue-500' />
				</a>
				<a
					href='https://github.com/MazharSolkar'
					target='blank'
					className='social-icon'>
					<BiLogoGithub className='github hover:text-gray-600' />
				</a>
				<a
					href='mailto: abc@example.com'
					target='blank'
					className='social-icon'>
					<BiLogoGmail className='gmail hover:text-red-500' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
