import ParagraphBlock from '../blocks/ParagraphBlock';
import HomeSectionBlock from '../blocks/HomeSectionBlock';
import HomeProjectsBlock from '../blocks/HomeProjectsBlock';
import TimelineBlock from '../blocks/TimelineBlock';
import SkillsBlock from '../blocks/SkillsBlock';

export default function BlocksBuilder({ info }) {
	const { sections, skillCategories } = info;

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
					// TODO Apply the new design
					// ComponentPagesTimeline: (
					// 	<TimelineBlock key={section.id} {...section} />
					// ),
					//TODO ComponentPagesSkills
					ComponentPagesSkills: (
						<SkillsBlock
							key={section.id}
							skillCategories={skillCategories}
							{...section}
						/>
					),
				};

				return sectionElements[section['__typename']];
			})}
		</>
	);
}
