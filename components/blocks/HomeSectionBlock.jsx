import React from 'react';
import Button from '../buttons/Button.jsx';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import { apiBase } from '../../helpers/helpers';

export default function HomeSectionBlock({
	title,
	upperTitle,
	description,
	url,
	actionText,
	image,
	color,
	contactLinks,
	linkId,
}) {
	// TODO Add bookmark functionality
	return (
		<section id={linkId} className={`grid-column container`}>
			<div className={styles['img-container']}>
				{image ? (
					<div className={styles['home-pic']}>
						<Image
							src={apiBase(image.url)}
							alt={image.alt}
							layout="fill"
							objectFit="contain"
							objectPosition="left bottom"
						/>
					</div>
				) : null}
			</div>
			<div className={styles['info-container']}>
				<div className={styles.info}>
					{upperTitle && <h2 className={styles.hello}>{upperTitle}</h2>}

					<h1 className={styles.title}>{title}</h1>

					{description && <span>{description}</span>}

					{contactLinks != null && contactLinks.length > 0
						? contactLinks.map(contactLink => (
								<div
									key={contactLink.id}
									className={styles['contact-container']}
								>
									<div className={styles['contact-svg']}>
										<Image
											src={apiBase(contactLink.icon.url)}
											alt={contactLink.icon.alternativeText}
											width={contactLink.icon.width}
											height={contactLink.icon.height}
											layout="responsive"
											objectFit="contain"
											objectPosition="left bottom"
										/>
									</div>
									<a className={styles.contact} href={contactLink.url}>
										{contactLink.title}
									</a>

									<br />
								</div>
						  ))
						: null}

					<br />
					{url && actionText ? (
						<Button url={url} color={color.name}>
							{actionText.title}
						</Button>
					) : null}
				</div>
			</div>
		</section>
	);
}
