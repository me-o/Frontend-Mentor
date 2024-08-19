// images
import starImage from '../assets/images/icon-star.svg';

type PropsType = {
	title?: string;
};

const Title = ({ title }: PropsType) => {
	const defaultTitle = 'FAQs';

	return (
		<h1 className=" flex items-center gap-[1.375rem] sm:gap-[1.875rem]">
			<div className=" w-[1.5625rem] sm:w-[2.625rem]">
				<img src={starImage} alt="" />
			</div>
			<div className=" font-bold text-3xl sm:text-[3.125rem]">{title || defaultTitle}</div>
		</h1>
	);
};

export default Title;
