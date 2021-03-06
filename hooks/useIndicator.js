import { useState, useEffect } from 'react';
import usePrev from './usePrev';

export default function useIndicator(scroll, scrollParts = 3, tolerance = 1) {
	const [index, setIndex] = useState(1);
	const prev = usePrev(index);

	function handleIndicator(newScroll) {
		let indexValue = 1;

		if (newScroll == 0) {
			return indexValue;
		}

		// Porcentage size of scroll
		const partPercent = 100 / scrollParts;

		let partCounter = partPercent;

		while (partPercent * indexValue - tolerance < newScroll) {
			partCounter += partPercent;
			indexValue++;
		}

		return indexValue;
	}

	useEffect(() => {
		const newIndex = handleIndicator(scroll);

		if (newIndex != index) setIndex(newIndex);
	}, [scroll]);

	return {
		value: index,
		prev,
	};
}
