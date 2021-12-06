import styles from '../../styles/components/blocks/SkillsBlock.module.scss';

export default function SkillsBlock({ title }) {
	return (
		<div className={styles['skills-block']}>
			<h2>Product design</h2>

			<div className={styles['skills-block__items']}>
				<div className={styles['skills-item']}></div>
			</div>
		</div>
	);
}
