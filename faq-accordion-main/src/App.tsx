import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Title from './components/Title';
import TopBg from './components/TopBg';

// images
import MinusIcon from './assets/images/icon-minus.svg';
import PluseIcon from './assets/images/icon-plus.svg';

const faqs = [
	{
		question: '	What is Frontend Mentor, and how will it help me?',
		answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	},
	{
		question: 'Is Frontend Mentor free?',
		answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
	},
	{
		question: 'Can I use Frontend Mentor projects in my portfolio?',
		answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
	},
	{
		question: "How can I get help if I'm stuck on a challenge?",
		answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
	},
];

function App() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			{/* top background */}
			<div className=" w-full absolute top-0 left-0 -z-10">
				<TopBg />
			</div>

			{/* card */}
			<div className=" bg-white shadow-DarkPurple m-6 mt-[9.0625rem] rounded-md px-6 pt-[1.625rem] max-w-[37.5rem] sm:mx-auto sm:mt-[10.4375rem] sm:px-[2.5rem] sm:pt-[3.125rem] sm:rounded-[.9375rem]">
				{/* header */}
				<Title title="FAQs" />

				{/* list */}
				<ul className=" sm:mt-4">
					{faqs.map((item, index) => (
						<li
							className={twMerge(
								' py-[1.25rem] sm:py-7 overflow-hidden border-b border-Pink last:border-none group hover:cursor-pointer',
								activeIndex === index && ' space-y-[1.375rem] sm:space-y-[1.875rem]'
							)}
							key={index}
							onClick={() => setActiveIndex(index)}
						>
							{/* question */}
							<div className=" flex items-center gap-[2.5rem] sm:gap-[1.875rem]">
								<div className=" font-semibold leading-5 flex-grow text-[.9375rem] group-hover:text-purple-500 sm:text-lg">
									{item.question}
								</div>

								{activeIndex === index ? (
									<img src={MinusIcon} alt="" />
								) : (
									<img src={PluseIcon} alt="" />
								)}
							</div>

							{/* answer */}
							<div
								className={twMerge(
									' text-[14px] text-GrayishPurple h-0 overflow-hidden transition-all duration-300 sm:text-[16px]',
									activeIndex === index && ' h-auto'
								)}
							>
								{item.answer}
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
