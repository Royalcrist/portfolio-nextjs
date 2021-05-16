import { gql } from '@apollo/client';

export const HOME = gql`
	query Home {
		home(locale: "es") {
			sections {
				... on ComponentPagesHomeSection {
					__typename
					title
					upperTitle
					description
					url
					actionText
					image {
						name
						alternativeText
						width
						height
						url
						previewUrl
					}
					color {
						name
					}
					contactLinks {
						__typename
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
				language
			}
			color {
				name
			}
			section {
				... on ComponentPagesSkills {
					__typename
					name
				}
				... on ComponentPagesParagraph {
					__typename
					paragraph
				}
				... on ComponentPagesTimeline {
					__typename
					title
				}
			}
		}
	}
`;
