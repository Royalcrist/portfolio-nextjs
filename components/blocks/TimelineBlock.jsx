import styles from '../../styles/components/blocks/TimelineBlock.module.scss';

export default function TimelineBlock({ items }) {
	const sides = {
		left: [],
		right: [],
	};

	items.forEach((item, index) => {
		const timelineItem = (
			<div
				key={item.id + index}
				className={`${styles['timeline-item']} ${
					index % 2 != 0 ? styles['even'] : styles['odd']
				}`}
			>
				<div className={styles['timeline-item__corner']}></div>
				<div className={styles['timeline-item__circle-indicator']}></div>
				<div className={styles['timeline-item__info']}>
					<h6 className={styles['timeline-item__info__title']}>{item.title}</h6>
					<p className={styles['timeline-item__info__date']}>
						{new Date(item.date).getFullYear()}
					</p>
					<p className={styles['timeline-item__info__description']}>
						{item.description}
					</p>
				</div>
			</div>
		);

		if (index % 2 != 0) {
			sides.left.push(timelineItem);
		} else {
			sides.right.push(timelineItem);
		}
	});

	return (
		<div className={styles['timeline']}>
			<div className={styles['timeline__left']}>{sides.left}</div>
			<div className={styles['timeline__middle-line']}></div>
			<div className={styles['timeline__right']}>{sides.right}</div>
		</div>
	);
}
