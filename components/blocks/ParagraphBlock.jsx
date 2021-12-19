import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/blocks/ParagrahpBlock.module.scss';
import { apiBase } from '../../helpers/helpers';

import PropType from 'prop-types';
import { ImageType } from '../../prop-types/GlobalPropTypes';

export default function ParagraphBlock({ title, paragraph, images }) {
	return (
		<div className={styles['paragraph-component']}>
			<h2>{title}</h2>
			<p>{paragraph}</p>
			{images &&
				(Array.isArray(images) ? (
					images.map((image, index) => (
						<div
							key={index + image.id}
							className={styles['paragraph-component__img']}
						>
							<Image
								src={apiBase(image.url)}
								layout="responsive"
								width={image.width}
								height={image.height}
								alt={image.alt}
							/>
						</div>
					))
				) : (
					<div className={styles['paragraph-component__img']}>
						<Image
							src={apiBase(images.url)}
							layout="responsive"
							width={images.width}
							height={images.height}
							objectFit="cover"
							alt={images.alt}
						/>
					</div>
				))}
		</div>
	);
}

ParagraphBlock.propTypes = {
	title: PropType.string.isRequired,
	paragraph: PropType.string.isRequired,
	images: PropType.oneOf([ImageType, PropType.arrayOf(ImageType)]),
};
