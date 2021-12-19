import React from 'react';
import Button from '../../../components/buttons/Button.jsx';

export default {
	component: Button,
	argTypes: {
		color: {
			control: { type: 'select' },
		},
	},
};

const Template = args => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
	children: 'Hola',
	url: '#',
	color: 'blue',
};

export const Yellow = Template.bind({});
Yellow.args = {
	...Blue.args,
	color: 'yellow',
};

export const Orange = Template.bind({});
Orange.args = {
	...Blue.args,
	color: 'orange',
};

export const Red = Template.bind({});
Red.args = {
	...Blue.args,
	color: 'red',
};
