import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/HomeProjects.module.scss';
import homeStyles from '../../styles/Home.module.scss';

// Components
import Button from '../Button';

// Provider
import { ProjectsContext } from '../../providers/ProjectsProvider';

export default function HomeProjectsBlock() {
	const { projects, index, setIndex } = useContext(ProjectsContext);
	const { name, description, img, imgLq, url, color, isDisable } =
		projects[index];

	return (
		<section id='projects' className={`grid-column ${homeStyles['container']}`}>
			<div
				className={`${homeStyles['img-container']} ${homeStyles['project']}`}
			>
				<div
					className={`${homeStyles['home-pic']} ${homeStyles['hq']} ${homeStyles['project']}'`}
				>
					<Image
						src={img}
						alt='My profile pic :)'
						layout='fill'
						objectFit='contain'
						objectPosition='left bottom'
					/>
				</div>

				<div
					className={`${homeStyles['home-pic']} ${homeStyles['lq']} ${homeStyles['project']}`}
				>
					<Image
						src={imgLq}
						alt='My profile pic :)'
						layout='fill'
						objectFit='contain'
						objectPosition='left bottom'
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
						}}
					>
						<Image
							src='/Navigation.svg'
							alt='Previous'
							layout='responsive'
							width='100%'
							height='80px'
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
						}}
					>
						<div className={styles['img']}>
							<Image
								src='/Navigation.svg'
								alt='Next'
								layout='responsive'
								width='100%'
								height='80px'
							/>
						</div>
					</button>
				</div>
			)}

			<div
				className={`${homeStyles['info-container']} ${homeStyles['project-container']}`}
			>
				<div className={`${homeStyles['info']} ${homeStyles['project-info']}`}>
					<h1 className='title'>{name}</h1>
					<span>{description}</span>
					<br />
					<Button url={url} color={color} isDisable={isDisable}>
						{isDisable ? 'Soon!' : 'View case'}
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
