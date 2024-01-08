import { IActivity, IActivityStore } from '@/stores/activity.interface'
import { produce } from 'immer'
import create, { SetState } from 'zustand'
import { persist } from 'zustand/middleware'
import resumeData from '../helpers/constants/resume-data.json'

const setAllAwards = (set: SetState<IActivityStore>) => (activityItem: IActivity) => {
  set({
    activities: activityItem,
  })
}

const updateAchievements = (set: SetState<IActivityStore>) => (achievements: string) => {
  set(
    produce((state: IActivityStore) => {
      state.activities.achievements = achievements
    }),
  )
}

const updateInvolvements = (set: SetState<IActivityStore>) => (involvements: string) => {
  set(
    produce((state: IActivityStore) => {
      state.activities.involvements = involvements
    }),
  )
}

export const useActivity = create<IActivityStore>(
  persist(
    (set, get) => ({
      activities: resumeData.activities,

      get: () => get().activities,
      reset: setAllAwards(set),
      updateAchievements: updateAchievements(set),
      updateInvolvements: updateInvolvements(set),
    }),
    { name: 'activities' },
  ),
)
