import React, { useEffect, useRef, useContext } from 'react';
import styles from '../../styles/components/blocks/ParagrahpBlock.module.scss';
import { apiBase } from '../../helpers/helpers';
import Markdown from 'markdown-to-jsx';
import { ProviderContext } from '../../providers/Provider';
import PropType from 'prop-types';

export default function ParagraphBlock({
	__typename,
	id,
	paragraph,
	...props
}) {
	const { blockBuilderDispatch } = useContext(ProviderContext);
	const blockId = __typename + id;
	const titleElem = useRef();
	let isElementSeleted = false;

	const Wrapper = ({ children }) => {
		return (
			<div id={blockId} className={styles['paragraph-component']} {...props}>
				{children}
			</div>
		);
	};

	const paragraphOptions = {
		wrapper: Wrapper,
		forceWrapper: true,
		createElement: (type, props, children) => {
			const isHeading = type =>
				type == 'h1' ||
				type == 'h2' ||
				type == 'h3' ||
				type == 'h4' ||
				type == 'h5' ||
				type == 'h6';

			if (isHeading(type) && !isElementSeleted) {
				props.ref = titleElem;
				isElementSeleted = true;
			}

			if (props.src) {
				props.src = apiBase(props.src);
			}
			return React.createElement(type, props, children);
		},
	};

	useEffect(() => {
		blockBuilderDispatch({
			type: 'ADD',
			payload: {
				selector: blockId,
				title: titleElem.current.innerHTML.trim(),
			},
		});
	}, []);

	return <Markdown options={paragraphOptions}>{paragraph}</Markdown>;
}

ParagraphBlock.propTypes = {
	paragraph: PropType.string.isRequired,
};
