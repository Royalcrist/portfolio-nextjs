import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.scss';

// Components
import Indicator from '../components/Indicator';
import FeaturedProjects from '../components/FeaturedProjects';
import InfoSidebar from '../components/layout/InfoSidebar';
import BlocksBuilder from '../components/builders/BlocksBuilder';

// Hooks
import useScroll from '../hooks/useScroll';
import usePrev from '../hooks/usePrev';

// For Static GraphQL generation
import client from '../lib/apollo-client';
import queries from '../queries/queries';

// Helpers
import { apiBase, displayLocaleName } from '../helpers/helpers';
import LanguageButton from '../components/buttons/LanguageButton';

const Profile = ({ profile, socialMedias }) => {
	const scrollInfo = useScroll(0);
	const prev = usePrev(scrollInfo.value);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (scrollInfo.value < prev) {
			setIsVisible(true);
		} else if (scrollInfo.value > prev) {
			setIsVisible(false);
		}
	});

	return (
		<>
			<div className={`grid-column-sidebar page`}>
				<InfoSidebar info={profile} backUrl="/" socialMedias={socialMedias} />

				<div className={`grid-column-sidebar ${styles['info-container']}`}>
					<div className={styles['info-sections']}>
						<BlocksBuilder sections={profile.sections} />
					</div>
				</div>

				<LanguageButton classname={styles['languange-button']} />
			</div>
		</>
	);
};

export async function getServerSideProps({ locale }) {
	const { data: profileData } = await client.query({
		query: queries('PROFILE', locale),
	});

	const { data: socialData } = await client.query({
		query: queries('SOCIAL_MEDIA', locale),
	});

	return {
		props: {
			...profileData,
			socialMedias: socialData.socialMedias,
		},
	};
}

export default Profile;
