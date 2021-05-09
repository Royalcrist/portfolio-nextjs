import styles from '../styles/components/Indicator.module.scss';

const Indicator = props => {
	const { style, modeTwo, notCenter, index } = props;
	return (
		<div
			className={`${styles['indicator-container']} ${
				modeTwo ? 'indicator-bg' : ''
			}`}
			style={style}
		>
			<div
				className={`${styles.indicator} ${modeTwo ? 'indicator-two' : ''} ${
					notCenter ? 'not-center' : ''
				}`}
			>
				<div
					className={styles['i-container']}
					style={modeTwo ? { display: 'none' } : {}}
				>
					<div className={styles['i-unselected']} />
					<div className={styles['i-unselected']} />
					<div className={styles['i-unselected']} />
					<div
						className={`${styles['i-selected']} ${styles['scroll-' + index]}`}
					/>
				</div>
				<span>Scroll for more</span>
			</div>
		</div>
	);
};

export default Indicator;
