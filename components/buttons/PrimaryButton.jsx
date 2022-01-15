import React from 'react';
import PropType from 'prop-types';
import Link from 'next/link';
import styles from '../../styles/components/buttons/PrimaryButton.module.scss';

export default function PrimaryButton({
	children,
	href,
	target,
	color,
	onClick,
	className = '',
	disable,
	...props
}) {
	const isDisable = disable || (!href && !onClick);
	const buttonElems = (
		<button
			className={`${styles['primary-button']} ${
				isDisable ? styles['disable'] : ''
			} ${className}`}
			style={{ background: color.gradient }}
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

PrimaryButton.propTypes = {
	children: PropType.node.isRequired,
	href: PropType.string,
	target: PropType.string,
	color: PropType.exact({
		accentColor: PropType.string,
		gradient: PropType.string,
	}),
	disable: PropType.bool,
	onClick: PropType.func,
};
