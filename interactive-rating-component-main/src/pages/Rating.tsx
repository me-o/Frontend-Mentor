import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import starIcon from '../assets/images/icon-star.svg';
import useChoose from '../hooks/useChoose';

const Rating = () => {
	const { chooseIndex, handleClick, handleSubmit } = useChoose();

	return (
		<motion.div
			transition={{ duration: 0.5 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className=" max-w-[20.5rem] mx-auto w-full rounded-[.9375rem] px-[1.4375rem] pt-[1.5625rem] pb-[2rem] bg-gradient-to-b from-Dark-Blue/70 to-Dark-Blue/30 sm:max-w-[25.75rem] sm:py-[2rem] sm:pl-[1.9375rem] sm:pr-[2.375rem]"
		>
			{/* icon */}
			<div className=" w-[2.625rem] rounded-full aspect-square grid place-content-center bg-Dark-Blue sm:w-[3.125rem]">
				<img src={starIcon} alt="star" />
			</div>

			{/* title */}
			<h1 className=" mt-[1.375rem] mb-[1.125rem] font-bold text-[24px] sm:mt-[2.3125rem] sm:mb-[1.25rem] sm:text-[26px] leading-none">
				How did we do?
			</h1>

			{/* content */}
			<p className=" text-Light-Grey text-sm leading-6">
				Please let us know how we did with your support request. All feedback is appreciated to help us improve
				our offering!
			</p>

			{/* choose */}
			<motion.ul
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.05 }}
				className=" my-[1.4375rem] flex justify-between items-center text-Light-Grey sm:mt-[1.4375rem] sm:mb-[1.875rem]"
			>
				{Array(5)
					.fill(0)
					.map((_, index) => (
						<motion.li
							variants={{
								hidden: { opacity: 0, zoom: 0.1 },
								visible: { opacity: 1, zoom: 1 },
							}}
							className={twMerge(
								' bg-Dark-Blue rounded-full w-[2.625rem] aspect-square grid place-content-center hover:bg-white hover:text-Very-Dark-Blue sm:w-[3.125rem] hover:cursor-pointer sm:hover:bg-Orange transition-all duration-300',
								chooseIndex === index && 'bg-white text-Very-Dark-Blue sm:hover:bg-white'
							)}
							onClick={() => handleClick(index)}
							key={index}
						>
							{index + 1}
						</motion.li>
					))}
			</motion.ul>

			{/* button */}
			<button
				className=" w-full rounded-full bg-Orange text-Very-Dark-Blue uppercase font-bold tracking-widest leading-[2.8125rem] hover:bg-white transition-all duration-300"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</motion.div>
	);
};

export default Rating;
