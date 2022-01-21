import React from 'react';

// Components
import SidebarLayout from '../components/layout/SideBarLayout';

// For Static GraphQL generation
import client from '../lib/apollo-client';
import queries from '../queries/queries';

const Profile = ({ profile, skillCategories }) => {
	return <SidebarLayout info={{ ...profile, skillCategories }} />;
};

export async function getServerSideProps({ locale }) {
	const { data: profileData } = await client.query({
		query: queries('PROFILE', locale),
	});

	const { data: skillsData } = await client.query({
		query: queries('SKILLS', locale),
	});

	return {
		props: {
			...profileData,
			skillCategories: skillsData.skillCategories,
		},
	};
}

export default Profile;
