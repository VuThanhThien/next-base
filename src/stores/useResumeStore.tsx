import { useActivity } from '@/stores/activity'
import { useEducations } from '@/stores/education'
import { useExperiences } from '@/stores/experience'
import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from '@/stores/skills'
import { useVoluteeringStore } from '@/stores/volunteering'
import ResumeData from '../helpers/constants/resume-data.json'
import { useAwards } from './awards'
import { useBasicDetails } from './basic'

export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: useBasicDetails((state: any) => state.values),
    work: useExperiences((state: any) => state.experiences),
    education: useEducations((state: any) => state.academics),
    awards: useAwards((state: any) => state.awards),
    volunteer: useVoluteeringStore((state: any) => state.volunteeredExps),
    skills: {
      languages: useLanguages((state: any) => state.get()),
      frameworks: useFrameworks((state: any) => state.get()),
      technologies: useTechnologies((state: any) => state.get()),
      libraries: useLibraries((state: any) => state.get()),
      databases: useDatabases((state: any) => state.get()),
      practices: usePractices((state: any) => state.get()),
      tools: useTools((state: any) => state.get()),
    },
    activities: useActivity((state: any) => state.get()),
  }
}

/**
 * @description Reset all the stores
 */
export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics)
  useLanguages.getState().reset(ResumeData.skills.languages)
  useFrameworks.getState().reset(ResumeData.skills.frameworks)
  useLibraries.getState().reset(ResumeData.skills.libraries)
  useDatabases.getState().reset(ResumeData.skills.databases)
  useTechnologies.getState().reset(ResumeData.skills.technologies)
  usePractices.getState().reset(ResumeData.skills.practices)
  useTools.getState().reset(ResumeData.skills.tools)
  useExperiences.getState().reset(ResumeData.work)
  useEducations.getState().reset(ResumeData.education)
  useVoluteeringStore.getState().reset(ResumeData.volunteer)
  useAwards.getState().reset(ResumeData.awards)
  useActivity.getState().reset(ResumeData.activities)
}
