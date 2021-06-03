import { useContext, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

// Components
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import Indicator from '../components/Indicator';
import HomeProjectsBlock from '../components/blocks/HomeProjectsBlock';

// Hooks
import useIndicator from '../hooks/useIndicator';
import useScroll from '../hooks/useScroll';

// Providers
import { ProjectsContext } from '../providers/Provider';

// For Static GraphQL generation
import client from '../lib/apollo-client';
import { HOME } from '../queries/queries';
import HomeSectionBlock from '../components/blocks/HomeSectionBlock';

export async function getServerSideProps() {
	const { data } = await client.query({
		query: HOME,
	});

	return {
		props: {
			...data.home,
		},
	};
}

export default function Home({ sections }) {
	const { color, setColor, projectColor } = useContext(ProjectsContext);

	const scroll = useScroll(0);
	const scrollInfo = useIndicator(scroll.value);

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

	const getSectionColor = section => {
		if (section.color) return section.color.name;
		else return 'blue';
	};

	useEffect(() => {
		console.log(
			sections[scrollInfo.value - 1]['__typename'] ==
				'ComponentPagesHomeSection',
		);
		if (
			sections[scrollInfo.value - 1]['__typename'] ==
			'ComponentPagesHomeSection'
		)
			setColor(getSectionColor(sections[scrollInfo.value - 1]));
	}, [scrollInfo.value]);

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
				{sections.map(section => {
					if (section['__typename'] == 'ComponentPagesHomeSection') {
						return <HomeSectionBlock key={section.id} section={section} />;
					} else {
						return <HomeProjectsBlock section={section} />;
					}
				})}
			</div>
		</>
	);
}
