import React from 'react';
import styles from '../../styles/components/blocks/ParagrahpBlock.module.scss';
import { apiBase } from '../../helpers/helpers';
import Markdown from 'markdown-to-jsx';

import PropType from 'prop-types';

export default function ParagraphBlock({ paragraph, ...props }) {
	const Wrapper = ({ children }) => {
		return (
			<div className={styles['paragraph-component']} {...props}>
				{children}
			</div>
		);
	};

	const paragraphOptions = {
		wrapper: Wrapper,
		forceWrapper: true,
		createElement: (type, props, children) => {
			if (props.src) props.src = apiBase(props.src);
			return React.createElement(type, props, children);
		},
	};

	return <Markdown options={paragraphOptions}>{paragraph}</Markdown>;
}

ParagraphBlock.propTypes = {
	paragraph: PropType.string.isRequired,
};
