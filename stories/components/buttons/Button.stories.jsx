import React from 'react';
import Button from '../../../components/buttons/Button.jsx';

export default {
	component: Button,
};

const Template = args => <Button {...args}>{args.children}</Button>;

export const Blue = Template.bind({});
Blue.args = {
	children: 'Hola',
	url: '#',
	color: 'blue',
};

export const Yellow = Template.bind({});
Yellow.args = {
	children: 'Hola',
	url: '#',
	color: 'yellow',
};

export const Orange = Template.bind({});
Orange.args = {
	children: 'Hola',
	url: '#',
	color: 'orange',
};

export const Red = Template.bind({});
Red.args = {
	children: 'Hola',
	url: '#',
	color: 'red',
};
