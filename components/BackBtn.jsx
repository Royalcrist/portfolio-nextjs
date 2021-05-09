import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/BackBtn.module.scss';

const BackBtn = props => {
	return (
		<div
			className={`${styles['back-btn-bg']} ${
				styles[props.hideBg ? 'hide' : '']
			}`}
		>
			<Link href={props.url}>
				<div className={`${styles['back-btn']} ${styles[props.className]}`}>
					<div className={styles['back-btn-icon']}>
						<Image src='/BackBtn.svg' alt='Back' layout='fill' />
					</div>
					<span>Go back</span>
				</div>
			</Link>
		</div>
	);
};

export default BackBtn;
