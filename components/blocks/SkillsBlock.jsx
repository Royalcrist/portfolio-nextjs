import Image from 'next/dist/client/image';
import { useContext, useEffect, useState } from 'react';
import { apiBase } from '../../helpers/helpers';
import { ProviderContext } from '../../providers/Provider';
import styles from '../../styles/components/blocks/SkillsBlock.module.scss';
import Modal from '../modals/Modal';

export default function SkillsBlock({
	__typename,
	id,
	title,
	skillCategories,
	...props
}) {
	const { blockBuilderDispatch } = useContext(ProviderContext);
	const blockId = __typename + id;

	useEffect(() => {
		blockBuilderDispatch({
			type: 'ADD',
			payload: {
				selector: blockId,
				title,
			},
		});
	}, []);

	const skillCategoriesElem = skillCategories.map(skillCategory => (
		<SkillCategory key={skillCategory.id} skillCategory={skillCategory} />
	));

	return (
		<div id={blockId} className={styles['skills-block']} {...props}>
			<h2>{title}</h2>
			{skillCategoriesElem}
		</div>
	);
}

function SkillCategory({ skillCategory, onClick }) {
	const [showModal, setShowModal] = useState(false);
	const { title, skills } = skillCategory;
	const skillsElems = [];
	const allSkillsElems = [];
	const moreSkills = [];

	for (let index = 0; index < skills.length; index++) {
		const elem = <Skill key={skills[index].id} skill={skills[index]} />;

		if (index < 4) {
			skillsElems.push(elem);
		}

		if (index >= 4 && index < 7) {
			moreSkills.push(skills[index]);
		}

		allSkillsElems.push(elem);
	}

	const handleClick = e => {
		e.stopPropagation();
		if (onClick) {
			onClick();
		}

		setShowModal(true);
	};

	if (skills.length > 0) {
		return (
			<>
				<Modal
					show={showModal}
					onClose={() => setShowModal(false)}
					title={title}
				>
					{allSkillsElems}
				</Modal>
				<div className={styles['skills-category']} onClick={handleClick}>
					<h4>{title}</h4>
					{skillsElems}
					{moreSkills.length > 0 && <MoreSkills skills={moreSkills} />}
				</div>
			</>
		);
	}

	return null;
}

function Skill({ skill }) {
	return (
		<div className={styles['skills-item']}>
			<Image
				src={apiBase(skill.icon.url)}
				alt={skill.icon.alternativeText}
				layout="responsive"
				width={skill.icon.width}
				height={skill.icon.height}
			/>
			<span>{skill.title}</span>
		</div>
	);
}

function MoreSkills({ skills }) {
	return (
		<div className={styles['more-skills']}>
			<div className={styles['more-skills-images']}>
				{skills.map(skill => (
					<div
						className={styles['more-skills-images__img']}
						key={skill.icon.id}
					>
						<Image
							src={apiBase(skill.icon.url)}
							alt={skill.icon.alternativeText}
							layout="responsive"
							width={skill.icon.width}
							height={skill.icon.height}
						/>
					</div>
				))}
			</div>
			<span>...</span>
		</div>
	);
}
