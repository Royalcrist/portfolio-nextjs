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
						<ParagraphBlock id={section.id} key={section.id} {...section} />
					),
					ComponentPagesHomeSection: (
						<HomeSectionBlock id={section.id} key={section.id} {...section} />
					),
					ComponentPagesHomeProjectSection: (
						<HomeProjectsBlock id={section.id} key={section.id} {...section} />
					),
					// TODO Apply the new design
					// ComponentPagesTimeline: (
					// 	<TimelineBlock key={section.id} {...section} />
					// ),
					ComponentPagesSkills: (
						<SkillsBlock
							id={section.id}
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
