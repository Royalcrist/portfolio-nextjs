import PropType from 'prop-types';

export const ImageType = PropType.shape({
	url: PropType.string,
	alt: PropType.string,
	width: PropType.number,
	height: PropType.number,
});
