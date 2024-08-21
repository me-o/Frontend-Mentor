import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';

import resultImg from '../assets/images/illustration-thank-you.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loader = ({ params }: any) => {
	return params.points;
};

const Result = () => {
	const points = useLoaderData() as string;

	return (
		<motion.div
			transition={{ duration: 1 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="  bg-gradient-to-b from-Dark-Blue/70 to-Dark-Blue/30 mx-auto max-w-[20.4375rem] rounded-[.9375rem] px-[1.5625rem] pt-[2rem] pb-[2.1875rem] flex flex-col items-center justify-center font-Overpass sm:max-w-[25.75rem] sm:pt-[2.8125rem] sm:pr-[2.5rem] sm:pb-[2.8125rem] sm:pl-[2rem]"
		>
			<Realistic
				globalOptions={{ resize: true }}
				autorun={{
					speed: 0.2,
					duration: 1,
				}}
			/>
			{/* img */}
			<div className="">
				<img src={resultImg} alt="" />
			</div>

			{/* res */}
			<div className=" rounded-full bg-Dark-Blue mt-[1.5rem] mb-[1.75rem] text-[14px] text-Orange px-3  leading-none py-2 sm:mt-[1.875rem] sm:mb-[2.125rem] sm:px-4">
				You selected {points} out of 5
			</div>

			{/* content */}
			<h1 className=" font-bold text-[24px] mb-[.625rem] sm:mb-[1.0625rem]">Thank you!</h1>
			<p className="text-center text-Light-Grey text-[.875rem] leading-6 sm:text-[14.8px]">
				We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get
				in touch!
			</p>
		</motion.div>
	);
};

Result.loader = loader;

export default Result;
