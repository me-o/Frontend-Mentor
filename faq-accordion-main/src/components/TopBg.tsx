// image
import MobileBg from '../assets/images/background-pattern-mobile.svg';
import DesktopBg from '../assets/images/background-pattern-desktop.svg';

const TopBg = () => {
	return (
		<>
			<img src={MobileBg} alt="" className=" w-full object-cover md:hidden" />
			<img src={DesktopBg} alt="" className=" w-full object-cover hidden md:block" />
		</>
	);
};

export default TopBg;
