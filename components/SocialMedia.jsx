import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/SocialMedia.module.scss';
import { apiBase } from '../helpers/helpers';

const SocialMedia = ({ media }) => {
	const { name, url, icon } = media;

	return (
		<a href={url} className={styles.media} target='_blank' rel='noreferrer'>
			<Image src={apiBase(icon.url)} alt={name} layout='fill' />
		</a>
	);
};

export default SocialMedia;
