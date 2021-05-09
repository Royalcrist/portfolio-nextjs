import { useState, useEffect } from 'react';
import usePrev from './usePrev';

export default function useIndicator(scroll) {
	const [index, setIndex] = useState(1);
	const prev = usePrev(index);

	function handleIndicator(newScroll) {
		let indexValue = 1;

		if (newScroll === 0) {
			indexValue = 1;
		} else if (newScroll >= 33 && newScroll < 58) {
			indexValue = 2;
		} else if (newScroll >= 58) {
			indexValue = 3;
		}

		return indexValue;
	}

	useEffect(() => {
		setIndex(handleIndicator(scroll));
	}, [scroll]);

	return {
		value: index,
		prev,
	};
}
