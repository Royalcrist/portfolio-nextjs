import React from 'react';
import PropType from 'prop-types';
import Link from 'next/link';
import styles from '../../styles/components/buttons/Button.module.scss';

export default function Button({ children, color, size, url, disable }) {
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
}

Button.propTypes = {
	children: PropType.node.isRequired,
	url: PropType.string.isRequired,
	color: PropType.oneOf(['blue', 'yellow', 'orange', 'red']),
	size: PropType.string,
	disable: PropType.bool,
};
