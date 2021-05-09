import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/Skills.module.scss';

export const Skills = () => {
	const skills = [
		{
			id: 1,
			name: 'Figma',
			file: '/skillsFigma.svg',
		},
		{
			id: 2,
			name: 'Adobe XD',
			file: '/skillsXd.svg',
		},
		{
			id: 3,
			name: 'Adobe Photoshop',
			file: '/skillsPhotoshop.svg',
		},
		{
			id: 4,
			name: 'Adobe Ilustrator',
			file: '/skillsAi.svg',
		},
		{
			id: 5,
			name: 'HTML',
			file: '/skillsHtml.svg',
		},
		{
			id: 6,
			name: 'CSS',
			file: '/skillsCss.svg',
		},
		{
			id: 7,
			name: 'Javascript',
			file: '/skillsJs.svg',
		},
		{
			id: 8,
			name: 'NodeJS',
			file: '/skillsNode.svg',
		},
		{
			id: 9,
			name: 'React',
			file: '/skillsReact.svg',
		},
		{
			id: 10,
			name: 'Angular',
			file: '/skillsAngular.svg',
		},
		{
			id: 11,
			name: 'Express',
			file: '/skillsExpress.svg',
		},
		{
			id: 12,
			name: 'MongoDB',
			file: '/skillsMongo.svg',
		},
		{
			id: 13,
			name: 'Git',
			file: '/skillsGit.svg',
		},
		{
			id: 14,
			name: 'GitHub',
			file: '/skillsGithub.svg',
		},
		{
			id: 15,
			name: 'Linux',
			file: '/skillsLinux.svg',
		},
		{
			id: 16,
			name: 'Java',
			file: '/skillsJava.svg',
		},
		{
			id: 17,
			name: 'Python',
			file: '/skillsPython.svg',
		},
		{
			id: 18,
			name: 'C++',
			file: '/skillsCplus.svg',
		},
	];

	return (
		<div className={styles.skills}>
			{skills.map(skill => (
				<div key={skill.id} className={styles['skill-icon']}>
					<div style={{ width: '4.8em' }}>
						<Image src={skill.file} alt={skill.name} layout='fill' />
					</div>
					<span>{skill.name}</span>
				</div>
			))}
		</div>
	);
};
