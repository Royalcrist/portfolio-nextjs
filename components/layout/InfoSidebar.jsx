import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/layout/InfoSidebar.module.scss';

import SocialMedia from '../../components/SocialMedia';
import { apiBase, displayLocaleName } from '../../helpers/helpers';
import {
	GithubButton,
	LinkedinButton,
	MailButton,
	MediumButton,
	PhoneButton,
} from '../buttons/SocialMediaButtons';

export default function InfoSidebar({
	info,
	backUrl,
	color = {
		accentColor: '#ffbb00',
		gradient: 'linear-gradient(-135deg, #ffbb00, #ff8800)',
	},
}) {
	const { locale: currentLocale, locales } = useRouter();
	const { title, subtitle, images, sections } = info;

	return (
		<div className={styles['info-sidebar-container']}>
			<div className={styles['info-sidebar']}>
				<div className={`${styles['image-container']}`}>
					{Array.isArray(images) ? (
						images.map((image, index) => (
							<Image
								key={image.id}
								src={apiBase(image.url)}
								layout="fill"
								objectFit="cover"
								alt={image.alt}
							/>
						))
					) : (
						<Image
							src={apiBase(images.url)}
							layout="fill"
							objectFit="cover"
							alt={images.alt}
						/>
					)}
					{backUrl && (
						<Link href={backUrl} locale={currentLocale}>
							<div className={styles['back-btn']}>
								<div className={styles['back-btn__img']}>
									<Image
										src={apiBase('/uploads/back_icon_7631375366.svg')}
										alt="Back icon"
										layout="responsive"
										height="32px"
										width="32px"
									/>
								</div>
							</div>
						</Link>
					)}
				</div>
				<div className={styles['info']}>
					<div className={`${styles['info-row']} ${styles['info-title']}`}>
						<h2 className={styles['title']}>{title}</h2>
						<p className={`${styles['subtitle']}`}>{subtitle}</p>
					</div>
					<div className={`${styles['info-row']} ${styles['bookmarks']}`}>
						<div className={styles['bookmarks-container']}>
							{sections &&
								sections.map(section => (
									<a
										href={`#${section.id}`}
										className={styles['bookmark-link']}
									>
										Tech enthusiast
									</a>
								))}
						</div>
					</div>
					<div className={styles['social-media']}>
						<MediumButton />
						<GithubButton />
						<LinkedinButton />
						<MailButton />
						<PhoneButton color={color} />
						{/* <h6>Reach me on</h6>
						<div className={styles['media-container']}>
							{socialMedias.map(socialMedia => (
								<SocialMedia key={socialMedia.id} media={socialMedia} />
							))}
						</div> */}
						{/* {socialMedias.map(socialMedia => (
					<SocialMedia key={socialMedia.id} media={socialMedia} />
				))} */}
					</div>
				</div>
			</div>
		</div>
	);
}
