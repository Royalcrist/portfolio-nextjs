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
						<ParagraphBlock key={section.id} section={section} />
					),
					ComponentPagesHomeSection: (
						<HomeSectionBlock key={section.id} section={section} />
					),
					ComponentPagesHomeProjectSection: (
						<HomeProjectsBlock key={section.id} section={section} />
					),
					ComponentPagesTimeline: (
						<TimelineBlock key={section.id} section={section} />
					),
					//TODO ComponentPagesSkills
				};

				return sectionElements[section['__typename']];
			})}
		</>
	);
}
