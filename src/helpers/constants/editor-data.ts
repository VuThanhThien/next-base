import ActivitiesLayout from '@/features/resume-builder/editor/modules/activities/ActivitiesLayout'
import AwardsLayout from '@/features/resume-builder/editor/modules/awards/AwardsLayout'
import BasicLayout from '@/features/resume-builder/editor/modules/basic/BasicLayout'
import EducationLayout from '@/features/resume-builder/editor/modules/education/EducationLayout'
import ExperienceLayout from '@/features/resume-builder/editor/modules/experience/ExperienceLayout'
import SkillsLayout from '@/features/resume-builder/editor/modules/skills/SkillsLayout'
import VolunteeringLayout from '@/features/resume-builder/editor/modules/volunteering/VolunteeringLayout'

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element }
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout },
  'skills-and-expertise': {
    title: 'Skills and expertise',
    component: SkillsLayout,
  },
  education: { title: 'Education', component: EducationLayout },
  experience: { title: 'Experience', component: ExperienceLayout },
  activities: { title: 'Activities', component: ActivitiesLayout },
  volunteering: { title: 'Volunteering', component: VolunteeringLayout },
  awards: { title: 'Awards', component: AwardsLayout },
}
