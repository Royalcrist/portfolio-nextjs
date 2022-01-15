import React from 'react';
import PropType from 'prop-types';
import Link from 'next/link';
import styles from '../../styles/components/buttons/SecundaryButton.module.scss';

export default function SecundaryButton({
	children,
	href,
	target,
	onClick,
	className = '',
	disable,
	...props
}) {
	const isDisable = disable || (!href && !onClick);
	const buttonElems = (
		<button
			className={`${styles['secundary-button']} ${
				isDisable ? styles['disable'] : ''
			} ${className}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);

	if (href) {
		if (target) {
			return (
				<a href={href} target={target}>
					{buttonElems}
				</a>
			);
		}

		return (
			<Link href={href} {...props}>
				{buttonElems}
			</Link>
		);
	}

	return buttonElems;
}

SecundaryButton.propTypes = {
	children: PropType.node.isRequired,
	href: PropType.string,
	target: PropType.string,
	disable: PropType.bool,
	onClick: PropType.func,
};
