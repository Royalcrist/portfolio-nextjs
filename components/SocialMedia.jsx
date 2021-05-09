import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/SocialMedia.module.scss';

const SocialMedia = props => {
	const { media } = props;
	return (
		<a
			href={media.url}
			className={styles.media}
			target='_blank'
			rel='noreferrer'
		>
			<Image src={media.logo} alt={media.description} layout='fill' />
		</a>
	);
};

export default SocialMedia;
