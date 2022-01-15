import React from 'react';
import SocialMediaButton from '../../../components/buttons/SocialMediaButtons';

export default {
	component: SocialMediaButton,
	argTypes: {
		type: {
			control: {
				type: 'select',
				labels: {
					github: 'Github',
					linkedin: 'Linkedin',
				},
			},
		},
	},
};

const template = args => <SocialMediaButton {...args} />;

export const Github = template.bind({});
Github.args = {
	type: 'github',
};

export const Linkedin = template.bind({});
Linkedin.args = {
	...Github.args,
	type: 'linkedin',
};
