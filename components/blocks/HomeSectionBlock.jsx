import React from 'react';
import Button from '../Button.jsx';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';

export default function HomeSectionBlock({ section }) {
	const {
		title,
		upperTitle,
		description,
		url,
		actionText,
		image,
		color,
		contactLinks,
	} = section;

	const baseApiUrl = process.env.NEXT_PUBLIC_API_BASE;

	console.log(color);

	return (
		<>
			<section id='me' className={`grid-column ${styles.container}`}>
				<div className={styles['img-container']}>
					{image ? (
						<div className={styles['home-pic']}>
							<Image
								src={baseApiUrl + image.url}
								alt={image.alt}
								layout='fill'
								objectFit='contain'
								objectPosition='left bottom'
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
									<div className={styles['contact-container']}>
										<div className={styles['contact-svg']}>
											<Image
												src={baseApiUrl + contactLink.icon.url}
												alt={contactLink.icon.alternativeText}
												width={contactLink.icon.width}
												height={contactLink.icon.height}
												layout='responsive'
												objectFit='contain'
												objectPosition='left bottom'
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
							<Button url={url} color={color}>
								{actionText}
							</Button>
						) : null}
					</div>
				</div>
			</section>
		</>
	);
}
