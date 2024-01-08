import { IAwardItem } from '@/stores/awards.interface'
import { IEducationItem } from '@/stores/education.interface'
import { IExperienceItem } from '@/stores/experience.interface'
import { ISkillItem } from '@/stores/skill.interface'
import { IVolunteeringItem } from '@/stores/volunteering.interface'
import { Fragment, ReactNode, useMemo } from 'react'

export const SectionValidator = ({
  value,
  children,
}: {
  value: string | IExperienceItem[] | IEducationItem[] | IAwardItem[] | IVolunteeringItem[] | ISkillItem[]
  children: ReactNode
}) => {
  const isValid = useMemo(() => {
    return (value || '').length > 0
  }, [value])

  if (!isValid) {
    return null
  }

  return <Fragment>{children}</Fragment>
}
