import React, { createContext, useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = props => {
	const [index, setIndex] = useState(0);
	const [language, setLanguange] = useState('english');

	const projects = [
		{
			id: 1,
			name: 'Cibus',
			description: "The Point of Sale System that you don't have to learn.",
			img: '/CibusPic.png',
			imgLq: '/CibusPicLq.png',
			url: '/cibus',
			color: 'orange',
		},
		{
			id: 2,
			name: 'GoBasket',
			description:
				'More than a shop-list app. Organize all your groceries on one tap.',
			img: '/GobasketPic.png',
			imgLq: '/GobasketPicLq.png',
			url: '/gobasket',
			color: 'red',
			isDisable: true,
		},
	];

	const cases = [
		{
			id: 1,
			description:
				"Cibus is a Point of Sale System (POS) conceived to be secure, modern, and functional but at the same time easy to understand. It's based on the previous POS System of the company, keeping all the essential features that make it stand out.\nIt specializes in restaurants, the company's main clients' sector, improving usability and experience, reducing the cost of tech support, and make the process of using it faster.\nIt has a complete administrative space, where you can control things like the user's permissions, inventory stocks, the recipes, and much more. Also, The POS space is very straightforward, it has all things to keep the business modern and rolling like order, delivery, charge, reports, and support.",
			background:
				'Evolution POS is a Venezuela-Base software company that makes tech solutions for restaurants and stores with +10 years established in the market and +300 clients.\nThey have a multidisciplinary team that shares the vision of changing the way that business works, making all their process faster, effective, and secure.\nI joined them as the only designer. I was responsible for developing the successor of their most popular POS System for restaurants ePOS.',
			problem:
				"The users needed customer support once every 3 days or so because the process of acting was cumbersome and therefore it was very susceptible to errors.\nThe situation had to change as soon as possible, it was unstainable economically and it was time-consuming for both the company and its costumers.\nAlso, the system hadn't received any interface updates since it was developed nine years ago at that time.",
		},
	];

	return (
		<ProjectsContext.Provider
			value={{ projects, index, setIndex, cases, language, setLanguange }}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
