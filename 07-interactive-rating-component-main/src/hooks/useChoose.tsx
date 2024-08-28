import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useChoose = () => {
	const [chooseIndex, setChooseIndex] = useState(-1);
	const navigate = useNavigate();

	/**
	 * choose list item
	 * @param index list item index
	 * @returns
	 */
	const handleClick = (index: number) => {
		if (index === chooseIndex) {
			return;
		}

		setChooseIndex(index);
	};

	/**
	 * submit choose result
	 */
	const handleSubmit = () => {
		// into page not choose anyone
		if (chooseIndex === -1) {
			return;
		}

		// to result page
		navigate(`result/${chooseIndex + 1}`);
	};

	return {
		chooseIndex,
		handleClick,
		handleSubmit,
	};
};

export default useChoose;
