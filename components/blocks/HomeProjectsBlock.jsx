import { useState, useContext } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/blocks/HomeProjectsBlock.module.scss';
import homeStyles from '../../styles/Home.module.scss';

// Providers
import { ProviderContext } from '../../providers/Provider.jsx';

// Components
import Button from '../buttons/Button';
import { apiBase } from '../../helpers/helpers';

export default function HomeProjectsBlock() {
	// TODO Add bookmark functionality
	const { projectsData, projectsLoading, projectsError, setColor } =
		useContext(ProviderContext);
	const [index, setIndex] = useState(0);

	if (projectsLoading) return null;

	const projects = projectsData.projects;
	const {
		id,
		name,
		description,
		homepageImage: img,
		color,
		actionText,
		commingSoon,
		commingSoonText,
	} = projects[index];

	return (
		<section id="projects" className={`grid-column container`}>
			<div
				className={`${homeStyles['img-container']} ${homeStyles['project']}`}
			>
				<div
					className={`${homeStyles['home-pic']} ${homeStyles['hq']} ${homeStyles['project']}'`}
				>
					<Image
						src={apiBase(img.url)}
						alt="My profile pic :)"
						layout="fill"
						objectFit="contain"
						objectPosition="left bottom"
					/>
				</div>
			</div>

			{index !== 0 && (
				<div className={styles['prev-container']}>
					<button
						className={styles['nav-prev']}
						onClick={e => {
							e.preventDefault();
							setIndex(index >= 1 ? index - 1 : index);
							setColor(color.name);
						}}
					>
						<Image
							src="/Navigation.svg"
							alt="Previous"
							layout="responsive"
							width="100%"
							height="80px"
						/>
					</button>
				</div>
			)}

			{index !== projects.length - 1 && (
				<div className={styles['next-container']}>
					<button
						className={styles['nav-next']}
						onClick={e => {
							e.preventDefault();
							setIndex(index < projects.length - 1 ? index + 1 : index);
							setColor(color.name);
						}}
					>
						<div className={styles['img']}>
							<Image
								src="/Navigation.svg"
								alt="Next"
								layout="responsive"
								width="100%"
								height="80px"
							/>
						</div>
					</button>
				</div>
			)}

			<div
				className={`${homeStyles['info-container']} ${homeStyles['project-container']}`}
			>
				<div className={`${homeStyles['info']} ${homeStyles['project-info']}`}>
					<h1 className={homeStyles['title']}>{name}</h1>
					<span>{description}</span>
					<br />
					{/* TODO cambiar por slug */}
					<Button url={'/' + id} color={color.name} disable={commingSoon}>
						{commingSoon ? commingSoonText.title : actionText.title}
					</Button>
					<div className={styles['project-indicator']}>
						<span
							className={styles['project-indicator-current']}
							style={{ color: 'var(--text-primary)' }}
						>{`${index + 1 < 10 ? '0' : ''}${index + 1}`}</span>
						/
						<span className={styles['project-indicator-total']}>{`${
							projects.length < 10 ? '0' : ''
						}${projects.length}`}</span>
					</div>
				</div>
			</div>
		</section>
	);
}
