import { gql } from '@apollo/client';

export const HOME = gql`
	query Home {
		home(locale: "es") {
			sections {
				... on ComponentPagesHomeSection {
					__typename
					id
					title
					upperTitle
					description
					url
					actionText: action_text {
						title
					}
					image {
						name
						alternativeText
						width
						height
						formats
						url
						previewUrl
					}
					color {
						name
					}
					contactLinks {
						__typename
						id
						title
						url
						icon {
							__typename
							name
							alternativeText
							width
							height
							url
							previewUrl
						}
					}
				}
				... on ComponentPagesHomeProjectSection {
					__typename
					id
					auto_scroll
				}
			}
		}
	}
`;

export const PROFILE = gql`
	query Profile {
		profile(locale: "es") {
			locale
			localizations {
				id
				locale
			}
			description
			languages {
				id
				language
			}
			color {
				name
			}
			section {
				... on ComponentPagesSkills {
					__typename
					id
					name
				}
				... on ComponentPagesParagraph {
					__typename
					id
					paragraph
				}
				... on ComponentPagesTimeline {
					__typename
					id
					title
				}
			}
		}
	}
`;

export const PROJECTS_HOME = gql`
	query Projects {
		projects(locale: "en", sort: "highlight:desc,commingSoon:asc") {
			locale
			localizations {
				id
				locale
			}
			id
			slug
			name
			description
			actionText: action_text {
				title
			}
			commingSoon
			commingSoonText: comming_soon_text {
				title
			}
			color {
				name
			}
			highlight
			homepageImage {
				name
				alternativeText
				width
				height
				formats
				url
				previewUrl
			}
		}
	}
`;

export const PROJECTS = gql`
	query Projects {
		projects(locale: "en", sort: "highlight:desc,commingSoon:asc") {
			locale
			localizations {
				id
				locale
			}
			id
			slug
			name
			description
			start
			end
			action_text {
				title
			}
			commingSoon
			commingSoonText: comming_soon_text {
				title
			}
			color {
				name
			}
			highlight
			cover {
				name
				alternativeText
				width
				height
				formats
				url
				previewUrl
			}
			images {
				name
				alternativeText
				width
				height
				formats
				url
				previewUrl
			}
		}
	}
`;
