import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/Button.module.scss';

const Button = props => {
	const { children, color, size, url, disable } = props;

	return (
		<Link href={url}>
			<div
				className={`${styles.button} ${styles['button-' + (color || 'blue')]} ${
					styles['button-' + (size || '')]
				} ${disable ? styles['button-disable'] : ''}`}
			>
				{children}
			</div>
		</Link>
	);
};

export default Button;
