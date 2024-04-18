import React from 'react';
import { DiJavascript1 } from 'react-icons/di';
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiGithub, SiJest, SiRedux, SiTailwindcss } from 'react-icons/si';
import IconWrapper from './IconWrapper';

const Skills = () => {
	return (
		<div>
			<section className='px-2 mt-12'>
				<p className='mb-8 text-xl text-gray-800 font-semibold text-center'>
					Proficient in various programming languages and technologies.💻
				</p>

				<div className='flex flex-wrap justify-center items-center'>
					<IconWrapper color={'cyan'}>
						<FaReact className='text-6xl md:text-7xl  text-white p-2 bg-cyan-500' />
					</IconWrapper>

					<IconWrapper color={'purple'}>
						<SiRedux className='text-6xl md:text-7xl  text-white p-2 bg-purple-500' />
					</IconWrapper>

					<IconWrapper color={'red'}>
						<SiJest className='text-6xl md:text-7xl  text-white p-2 bg-red-500' />
					</IconWrapper>

					<IconWrapper color={'teal'}>
						<SiTailwindcss className='text-6xl md:text-7xl  text-white p-2 bg-teal-500' />
					</IconWrapper>

					<IconWrapper color={'yellow'}>
						<DiJavascript1 className='text-6xl md:text-7xl  text-white p-2 bg-yellow-500' />
					</IconWrapper>

					<IconWrapper color={'orange'}>
						<FaHtml5 className='text-6xl md:text-7xl  text-white p-2 bg-orange-500' />
					</IconWrapper>

					<IconWrapper color={'blue'}>
						<FaCss3Alt className='text-6xl md:text-7xl  text-white p-2 bg-blue-500' />
					</IconWrapper>

					<IconWrapper color={'black'}>
						<SiGithub className='text-6xl md:text-7xl  text-black p-2 bg-white' />
					</IconWrapper>
				</div>
			</section>
		</div>
	);
};

export default Skills;
