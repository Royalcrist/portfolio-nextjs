import { useContext, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

// Components
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import Indicator from '../components/Indicator';
import BlocksBuilder from '../components/builders/BlocksBuilder';

// Hooks
import useIndicator from '../hooks/useIndicator';
import useScroll from '../hooks/useScroll';

// Providers
import { ProjectsContext } from '../providers/Provider';

// For Static GraphQL generation
import client from '../lib/apollo-client';
import queries from '../queries/queries';

export default function Home({ sections, socialMedias }) {
	const { color, setColor, projectsData } = useContext(ProjectsContext);

	const scroll = useScroll(0);
	const scrollInfo = useIndicator(scroll.value);

	const projects = projectsData ? projectsData.projects : null;

	const getSectionColor = section => {
		if (section.color) return section.color.name;
		else return 'blue';
	};

	useEffect(() => {
		const sectionsTypeDispatch = {
			ComponentPagesHomeSection: () =>
				setColor(getSectionColor(sections[scrollInfo.value - 1])),

			ComponentPagesHomeProjectSection: () => {
				if (projects) setColor(projects[0].color.name);
			},
		};

		const currentSection = sections[scrollInfo.value - 1];

		// Dispatch the color setter depending on the section type
		sectionsTypeDispatch[currentSection['__typename']]();
	}, [scrollInfo.value]);

	return (
		<>
			<Header
				index={scrollInfo.value}
				showLogo
				showNav
				color={color}
				socialMedias={socialMedias}
			/>

			<div className={styles['media-container']}>
				{socialMedias.map(socialMedia => (
					<SocialMedia key={socialMedia.id} media={socialMedia} />
				))}
			</div>

			<Indicator index={scrollInfo.value} previousIndex={scrollInfo.prev} />

			<div className='page' onScroll={scroll.onScroll}>
				<BlocksBuilder sections={sections} />
			</div>
		</>
	);
}

export async function getServerSideProps({ locale }) {
	const { data } = await client.query({
		query: queries('HOME', locale),
	});

	const { data: socialData } = await client.query({
		query: queries('SOCIAL_MEDIA', locale),
	});

	return {
		props: {
			...data.home,
			socialMedias: socialData.socialMedias,
		},
	};
}
