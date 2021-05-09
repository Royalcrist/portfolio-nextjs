import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

// Components
import SocialMedia from './SocialMedia';
// import LanguageButton from './LanguageButton';

const Header = props => {
	const {
		index,
		showLogo,
		showNav,
		hideMenu,
		hideBg,
		color,
		socialMedia,
	} = props;
	const { github, linkedin } = socialMedia;
	const [logo, setLogo] = useState(null);
	const [menu, setMenu] = useState(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (showLogo) {
			setLogo(
				<>
					<div className={styles.logo}>
						<span>cristian</span>
						<div className={`${styles['logo-dot']} ${color}`} />
					</div>
				</>,
			);
		} else {
			setLogo(null);
		}
	}, [showLogo, color]);

	useEffect(() => {
		if (!hideMenu) {
			setMenu(
				<>
					<div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
						<div
							className={styles['navbar-i-group']}
							style={!showNav ? { display: 'none' } : {}}
						>
							<div
								className={`${styles['selected-box']} ${
									styles['selected-' + index]
								}`}
							/>
							<Link href='/#me'>
								<div
									className={`${styles['navbar-i']} ${
										index === 1 ? styles.selected : ''
									}`}
									onClick={() => {
										if (isActive) setIsActive(!isActive);
									}}
								>
									Home
								</div>
							</Link>
							<Link href='/#projects'>
								<div
									className={`${styles['navbar-i']} ${
										index === 2 ? styles.selected : ''
									}`}
									onClick={() => {
										if (isActive) setIsActive(!isActive);
									}}
								>
									Projects
								</div>
							</Link>
							<Link href='/#contact'>
								<div
									className={`${styles['navbar-i']} ${
										index === 3 ? styles.selected : ''
									}`}
									onClick={() => {
										if (isActive) setIsActive(!isActive);
									}}
								>
									Contact
								</div>
							</Link>
						</div>

						{/* <LanguageButton color={color} /> */}

						<div className={styles['media-container-nav']}>
							<SocialMedia media={github} />
							<SocialMedia media={linkedin} />
						</div>
					</div>

					<button
						className={`${styles['menu-btn']} ${
							isActive ? styles['active'] : ''
						}`}
						onClick={() => {
							setIsActive(!isActive);
						}}
					>
						<Image
							src={!isActive ? '/Menu.svg' : '/Close.svg'}
							alt='Menu icon'
							layout='fill'
						/>
					</button>
				</>,
			);
		} else {
			setMenu(null);
		}
	}, [
		hideMenu,
		index,
		isActive,
		color,
		socialMedia,
		showNav,
		github,
		linkedin,
	]);

	return (
		// <nav className={`navbar ${isActive ? 'active' : ''}`}>
		<nav className={`${styles.navbar} ${isActive ? styles['active'] : ''}`}>
			<div
				className={`${styles['nav-bg']} ${hideBg ? styles['hide-bg'] : ''}`}
			/>

			{logo}

			{menu}
		</nav>
	);
};

export default Header;
