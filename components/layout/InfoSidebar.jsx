import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/layout/InfoSidebar.module.scss';

import SocialMedia from '../../components/SocialMedia';
import { apiBase, displayLocaleName } from '../../helpers/helpers';

export default function InfoSidebar({ info, backUrl, socialMedias }) {
	const { locale: currentLocale, locales } = useRouter();
	const { title, subtitle, description, images } = info;

	return (
		<div className={styles['info-sidebar-container']}>
			<div className={styles['info-sidebar']}>
				<div className={`${styles['image-container']}`}>
					{Array.isArray(images) ? (
						images.map((image, index) => (
							<Image
								key={image.id}
								src={apiBase(image.url)}
								layout='fill'
								objectFit='cover'
								alt={image.alt}
							/>
						))
					) : (
						<Image
							src={apiBase(images.url)}
							layout='fill'
							objectFit='cover'
							alt={images.alt}
						/>
					)}
					{backUrl && (
						<Link href={backUrl} locale={currentLocale}>
							<div className={styles['back-btn']}>
								<div className={styles['back-btn__img']}>
									<Image
										src={apiBase('/uploads/back_icon_7631375366.svg')}
										alt='Back icon'
										layout='responsive'
										height='32px'
										width='32px'
									/>
								</div>
							</div>
						</Link>
					)}
				</div>
				<div className={styles['info']}>
					<h5 className={styles['title']}>{title}</h5>
					<p className={`${styles['subtitle']}`}>{subtitle}</p>
					<p>{description}</p>
					<h6>Languages</h6>
					<div className={`${styles['languages']}`}>
						{locales.map((locale, index) => (
							<div
								key={`language__item${locale + index}`}
								className={styles['language__item']}
							>
								{displayLocaleName(currentLocale, locale)}
							</div>
						))}
					</div>
					<div className={styles['social-media']}>
						<h6>Reach me on</h6>
						<div className={styles['media-container']}>
							{socialMedias.map(socialMedia => (
								<SocialMedia key={socialMedia.id} media={socialMedia} />
							))}
						</div>
						{/* {socialMedias.map(socialMedia => (
					<SocialMedia key={socialMedia.id} media={socialMedia} />
				))} */}
					</div>
				</div>
			</div>
		</div>
	);
}
