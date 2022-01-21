import Image from 'next/dist/client/image';
import { apiBase } from '../../helpers/helpers';
import styles from '../../styles/components/blocks/SkillsBlock.module.scss';

export default function SkillsBlock({ title, skillCategories }) {
	return (
		<div className={styles['skills-block']}>
			<h2>{title}</h2>
			{skillCategories.map(skillCategory => (
				<SkillCategory
					key={skillCategory.id}
					skillCategory={skillCategory}
					onClick={() => console.log('clicked')}
				/>
			))}
		</div>
	);
}

function SkillCategory({ skillCategory, onClick }) {
	const { title, skills } = skillCategory;
	const skillsElems = [];
	const moreSkills = [];

	for (let index = 0; index < skills.length; index++) {
		if (index < 4) {
			skillsElems.push(<Skill key={skills[index].id} skill={skills[index]} />);
		}

		if (index >= 4 && index < 7) {
			moreSkills.push(skills[index]);
		}
	}

	return (
		<div className={styles['skills-category']} onClick={onClick}>
			<h4>{title}</h4>
			{skillsElems}
			{moreSkills.length > 0 && <MoreSkills skills={moreSkills} />}
		</div>
	);
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
