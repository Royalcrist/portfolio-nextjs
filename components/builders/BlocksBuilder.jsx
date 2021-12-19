import ParagraphBlock from '../blocks/ParagraphBlock';
import HomeSectionBlock from '../blocks/HomeSectionBlock';
import HomeProjectsBlock from '../blocks/HomeProjectsBlock';
import TimelineBlock from '../blocks/TimelineBlock';

export default function BlocksBuilder({ sections }) {
	return (
		<>
			{sections.map(section => {
				const sectionElements = {
					ComponentPagesParagraph: (
						<ParagraphBlock key={section.id} {...section} />
					),
					ComponentPagesHomeSection: (
						<HomeSectionBlock key={section.id} {...section} />
					),
					ComponentPagesHomeProjectSection: (
						<HomeProjectsBlock key={section.id} {...section} />
					),
					ComponentPagesTimeline: (
						<TimelineBlock key={section.id} {...section} />
					),
					//TODO ComponentPagesSkills
				};

				return sectionElements[section['__typename']];
			})}
		</>
	);
}
