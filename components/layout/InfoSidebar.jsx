import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/layout/InfoSidebar.module.scss';
import { apiBase } from '../../helpers/helpers';
import {
	GithubButton,
	LinkedinButton,
	MailButton,
	PhoneButton,
} from '../buttons/SocialMediaButtons';
import { ProviderContext } from '../../providers/Provider';

export default function InfoSidebar({
	info,
	backUrl,
	color = {
		accentColor: '#ffbb00',
		gradient: 'linear-gradient(-135deg, #ffbb00, #ff8800)',
	},
}) {
	const { locale: currentLocale } = useRouter();
	const { title, subtitle, images } = info;
	const { blockBuilderState, blockBuilderDispatch } =
		useContext(ProviderContext);

	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		setBookmarks([]);
	}, [currentLocale]);

	useEffect(() => {
		setBookmarks(
			Object.keys(blockBuilderState.links).map(linkId => {
				const link = blockBuilderState.links[linkId];
				return (
					<a
						key={linkId + '-bookmarks'}
						href={`#${link.selector}`}
						className={styles['bookmark-link']}
					>
						{link.title}
					</a>
				);
			}),
		);
	}, [blockBuilderState]);

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
						<h3 className={styles['title']}>{title}</h3>
						<p className={`${styles['subtitle']}`}>{subtitle}</p>
					</div>
					<div className={`${styles['info-row']} ${styles['bookmarks']}`}>
						<div className={styles['bookmarks-container']}>
							{bookmarks.length > 0 && bookmarks}
						</div>
					</div>
					<div className={styles['social-media']}>
						{/* <MediumButton /> */}
						<GithubButton />
						<LinkedinButton />
						<MailButton />
						<PhoneButton color={color} />
					</div>
				</div>
			</div>
		</div>
	);
}
