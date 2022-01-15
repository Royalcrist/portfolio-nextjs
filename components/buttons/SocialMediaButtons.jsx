import React from 'react';
import SecundaryButton from './SecundaryButton';
import MediumIcon from '../icons/social/MediumIcon';
import GithubIcon from '../icons/social/GithubIcon';
import LinkedinIcon from '../icons/social/LinkedinIcon';
import MailIcon from '../icons/social/MailIcon';
import PhoneIcon from '../icons/social/PhoneIcon';
import styles from '../../styles/components/buttons/SocialMediaButton.module.scss';
import PrimaryButton from './PrimaryButton';

export function GithubButton(props) {
	return (
		<SecundaryButton
			href="https://github.com/Royalcrist"
			target="_blank"
			className={styles['social-media-btn']}
			{...props}
		>
			<GithubIcon />
		</SecundaryButton>
	);
}

export function LinkedinButton(props) {
	return (
		<SecundaryButton
			href="https://www.linkedin.com/in/hicrist/"
			target="_blank"
			className={styles['social-media-btn']}
			{...props}
		>
			<LinkedinIcon />
		</SecundaryButton>
	);
}

export function MailButton(props) {
	return (
		<SecundaryButton
			className={styles['social-media-btn']}
			href="mailto:cristiansuarezg7@gmail.com"
			{...props}
		>
			<MailIcon />
		</SecundaryButton>
	);
}

export function MediumButton(props) {
	return (
		<SecundaryButton
			href="#"
			target="_blank"
			className={styles['social-media-btn']}
			{...props}
		>
			<MediumIcon />
		</SecundaryButton>
	);
}

export function PhoneButton(props) {
	return (
		<PrimaryButton
			href="tel:+34645403164"
			className={styles['social-media-btn']}
			{...props}
		>
			<PhoneIcon />
		</PrimaryButton>
	);
}
