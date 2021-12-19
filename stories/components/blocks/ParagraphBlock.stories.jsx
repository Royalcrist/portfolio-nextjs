import React from 'react';
import ParagraphBlock from '../../../components/blocks/ParagraphBlock';

export default {
	component: ParagraphBlock,
	argTypes: {
		images: {
			options: ['NoImage', 'OneImage', 'MultipleImages'],
			mapping: {
				NoImage: undefined,
				// TODO Create the examples
				OneImage: undefined,
				MultipleImages: undefined,
			},
			control: {
				type: 'select',
				labels: {
					NoImage: 'No image',
					OneImage: 'One image',
					MultipleImages: 'Multiple images',
				},
			},
		},
	},
};

const Template = args => <ParagraphBlock {...args} />;

export const Simple = Template.bind({});
Simple.args = {
	title: 'The most wonderful title',
	paragraph:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nisl ac nisl porttitor imperdiet. Fusce rutrum, turpis vel rhoncus placerat, nunc elit dictum mi, mattis sagittis tortor felis et sem. Pellentesque ante dolor, elementum sit amet consectetur sit amet, vulputate id leo. Phasellus in vestibulum urna. Nam imperdiet efficitur sem, ac dignissim quam vehicula eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sed ligula eu augue blandit aliquam quis id ex.',
	images: 'NoImage',
};

export const OneImage = Template.bind({});
OneImage.args = {
	...Simple.args,
	images: 'OneImage',
};

export const MultipleImages = Template.bind({});
MultipleImages.args = {
	...Simple.args,
	images: 'MultipleImages',
};
