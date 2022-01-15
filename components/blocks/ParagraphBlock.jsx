import React from 'react';
import styles from '../../styles/components/blocks/ParagrahpBlock.module.scss';
import { apiBase } from '../../helpers/helpers';
import Markdown from 'markdown-to-jsx';

import PropType from 'prop-types';

export default function ParagraphBlock({ paragraph }) {
	const paragraphOptions = {
		wrapper: wrapper,
		forceWrapper: true,
		createElement: (type, props, children) => {
			if (props.src) props.src = apiBase(props.src);
			return React.createElement(type, props, children);
		},
	};

	return <Markdown options={paragraphOptions}>{paragraph}</Markdown>;
}

function wrapper(props) {
	return <div className={styles['paragraph-component']}>{props.children}</div>;
}

ParagraphBlock.propTypes = {
	paragraph: PropType.string.isRequired,
};
