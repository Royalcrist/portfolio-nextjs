import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

// Components
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import Indicator from '../components/Indicator';
import Button from '../components/Button';
import HomeProjects from '../components/HomeProjects';
import EmailIcon from '../components/icons/EmailIcon';
import PhoneIcon from '../components/icons/PhoneIcon';

// Hooks
import useIndicator from '../hooks/useIndicator';
import useScroll from '../hooks/useScroll';

// Providers
import { ProjectsContext } from '../providers/ProjectsProvider';

export default function Home() {
	const scroll = useScroll(0);
	const scrollInfo = useIndicator(scroll.value);
	const email = 'cristiansuarezg7@gmail.com';
	const number = '+34 645 40 31 64';
	const linkedin = {
		id: 1,
		description: 'LinkedIn',
		url: 'https://www.linkedin.com/in/hicrist/',
		logo: '/linkedin.svg',
	};
	const github = {
		id: 2,
		description: 'Github',
		url: 'https://github.com/Royalcrist',
		logo: '/github.svg',
	};

	const { index: projectIndex, projects } = useContext(ProjectsContext);
	const [color, setColor] = useState('blue');

	useEffect(() => {
		if (scrollInfo.value === 2) setColor(projects[projectIndex].color);
		else if (scrollInfo.value === 3) setColor('yellow');
		else setColor('blue');
	}, [scrollInfo.value, projectIndex, projects]);

	return (
		<>
			<Header
				index={scrollInfo.value}
				showLogo
				showNav
				color={color}
				socialMedia={{ github, linkedin }}
			/>

			<div className={styles['media-container']}>
				<SocialMedia media={linkedin} />
				<SocialMedia media={github} />
			</div>

			<Indicator index={scrollInfo.value} previousIndex={scrollInfo.prev} />

			<div className={styles.page} onScroll={scroll.onScroll}>
				<section id='me' className={`grid-column ${styles.container}`}>
					<div className={styles['img-container']}>
						<div className={styles['home-pic']}>
							<Image
								src='/ProfilePic.png'
								alt='My profile pic :)'
								layout='fill'
								objectFit='contain'
								objectPosition='left bottom'
							/>
						</div>
					</div>
					<div className={styles['info-container']}>
						<div className={styles.info}>
							<h2 className={styles.hello}>HELLO!</h2>
							<h1 className={styles.title}>I&apos;M CRISTIAN</h1>
							<span>
								UX/UI Designer &#38; Frontend Developer based in Seville who
								always wear a smile at work.
							</span>
							<br />
							<Button url='/profile'>Know me</Button>
						</div>
					</div>
				</section>

				<HomeProjects />

				<section id='contact' className={`grid-column ${styles['container']}`}>
					<div className={styles['img-container']}>
						<div
							className={`${styles['home-pic']} ${styles['hq']} ${styles['contact']}`}
						>
							<Image
								src='/ContactPic.png'
								alt='Contact me :)'
								layout='fill'
								objectFit='contain'
								objectPosition='left bottom'
							/>
						</div>
					</div>
					<div className={styles['info-container']}>
						<div className={`${styles['info']} ${styles['contact-info']}`}>
							<h1 className={styles.title}>GET IN TOUCH</h1>
							<div className={styles['contact-container']}>
								<EmailIcon />
								<a className={styles.contact} href={`mailto:${email}`}>
									{email}
								</a>
								<br />
							</div>
							<div className={styles['contact-container']}>
								<PhoneIcon />
								<a className={styles.contact} href={`tel:${number}`}>
									{number}
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
