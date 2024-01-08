import { PrintResume } from '@/features/resume-builder/nav-bar/components/PrintResume'
import { Toast } from '@/helpers/common/atoms/Toast'
import { AVAILABLE_TEMPLATES } from '@/helpers/constants'
import { useActivity } from '@/stores/activity'
import { useAwards } from '@/stores/awards'
import { useBasicDetails } from '@/stores/basic'
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
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import DEFAULT_RESUME_JSON from '../../../helpers/constants/resume-data.json'
import { NavBarActions, StyledButton } from './atoms'

import { theme } from '@/config/theme'
import exportFromJSON from 'export-from-json'

const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length

const NavBarLayout = () => {
  const [openToast, setOpenToast] = useState(false)
  const fileInputRef = useRef(null)

  const exportResumeData = useCallback(() => {
    const updatedResumeJson = {
      ...DEFAULT_RESUME_JSON,
      basics: {
        ...DEFAULT_RESUME_JSON.basics,
        ...useBasicDetails.getState().values,
      },
      work: useExperiences.getState().experiences,
      education: useEducations.getState().academics,
      awards: useAwards.getState().awards,
      volunteer: useVoluteeringStore.getState().volunteeredExps,
      skills: {
        languages: useLanguages.getState().get(),
        frameworks: useFrameworks.getState().get(),
        technologies: useTechnologies.getState().get(),
        libraries: useLibraries.getState().get(),
        databases: useDatabases.getState().get(),
        practices: usePractices.getState().get(),
        tools: useTools.getState().get(),
      },
      activities: useActivity.getState().activities,
    }
    const fileName = updatedResumeJson.basics.name + '_' + new Date().toLocaleString()
    const exportType = exportFromJSON.types.json
    exportFromJSON({
      data: updatedResumeJson,
      fileName,
      exportType,
    })
  }, [])

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0]
    if (!fileObj) {
      return
    }

    const reader = new FileReader()

    reader.readAsText(fileObj)

    event.target.value = '' // To read the same file

    reader.onload = e => {
      if (typeof e.target?.result === 'string') {
        const uploadedResumeJSON = JSON.parse(e.target?.result)
        const {
          basics = {},
          skills = {},
          work = [],
          education = [],
          activities = {
            involvements: '',
            achievements: '',
          },
          volunteer = [],
          awards = [],
        } = uploadedResumeJSON
        const {
          languages = [],
          frameworks = [],
          libraries = [],
          databases = [],
          technologies = [],
          practices = [],
          tools = [],
        } = skills
        useBasicDetails.getState().reset(basics)
        useLanguages.getState().reset(languages)
        useFrameworks.getState().reset(frameworks)
        useLibraries.getState().reset(libraries)
        useDatabases.getState().reset(databases)
        useTechnologies.getState().reset(technologies)
        usePractices.getState().reset(practices)
        useTools.getState().reset(tools)
        useExperiences.getState().reset(work)
        useEducations.getState().reset(education)
        useVoluteeringStore.getState().reset(volunteer)
        useAwards.getState().reset(awards)
        useActivity.getState().reset(activities)
        setOpenToast(true)
      }
    }
  }, [])

  return (
    <nav
      className="print:hidden"
      style={{
        height: '56px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        paddingBlock: '10px',
        paddingInline: '3%',
        alignItems: 'center',
        zIndex: '20px',
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.24)',
        background: theme.palette.primary.main,
      }}>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '1.25rem',
        }}>
        <NavBarActions>
          <StyledButton variant="text" onClick={exportResumeData}>
            Export
          </StyledButton>
          <StyledButton
            variant="text"
            onClick={() => {
              if (fileInputRef.current) {
                const fileElement = fileInputRef.current as HTMLInputElement
                fileElement.click()
              }
            }}>
            Import <input type="file" hidden ref={fileInputRef} accept="application/json" onChange={handleFileChange} />
          </StyledButton>
          <PrintResume />
        </NavBarActions>
      </div>
      <Toast
        open={openToast}
        onClose={() => {
          setOpenToast(false)
        }}
        content={'Resume data was successfully imported.'}
      />
    </nav>
  )
}

export default NavBarLayout
