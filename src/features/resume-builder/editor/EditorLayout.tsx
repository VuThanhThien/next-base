import { theme } from '@/config/theme'
import { PrintResume } from '@/features/resume-builder/nav-bar/components/PrintResume'
import ResumeHeader from '@/features/resume-builder/resume/resume/components/ResumeHeader'
import { headers } from '@/helpers/constants/editor-data'
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
import { resetResumeStore } from '@/stores/useResumeStore'
import { useVoluteeringStore } from '@/stores/volunteering'
import styled from '@emotion/styled'
import { Box, Button, Grid } from '@mui/material'
import exportFromJSON from 'export-from-json'
import { motion } from 'framer-motion'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import DEFAULT_RESUME_JSON from '../../../helpers/constants/resume-data.json'
import DataHeaders from './components/EditHeaders'
import EditSection from './components/EditSection'
const StyledButton = styled(Button)(() => ({
  borderColor: 'transparent',
  textTransform: 'none',
  textDecoration: 'underline',
  ':hover': {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
}))
const ActionButton = styled(Button)(() => ({
  width: '100%',
  borderColor: 'transparent',
  border: '0.5px solid var(--primary-blue-color, #181E54)',
  borderRadius: '8px',
  color: theme.palette.primary.main,
  ':hover': {
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
    backgroundColor: theme.palette.primary.main,
  },
}))

const EditorLayout = () => {
  const fileInputRef = useRef(null)
  const [openToast, setOpenToast] = useState(false)
  const [link, setLink] = useState('')
  const section = headers[link]
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
  const linkClickHandler = (link: string) => {
    setLink(link)
  }

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  )

  return (
    <div className="bg-resume-50 h-full text-resume-800  overflow-auto relative no-scrollbar shadow-level-4dp w-full flex flex-col justify-between">
      <Box>
        <div
          className=" print:hidden"
          style={{
            marginBottom: '0.75rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <ResumeHeader />
        </div>
        {displayElement}
        <div className="mt-6 flex justify-end">
          <motion.div
            whileHover={{
              scale: 1.2,
            }}>
            <StyledButton onClick={resetResumeStore}>Reset all edits</StyledButton>
          </motion.div>
        </div>
      </Box>
      <Box>
        <Grid container spacing="6px">
          <Grid item xs={6}>
            <ActionButton variant="text" onClick={exportResumeData}>
              Export
            </ActionButton>
          </Grid>
          <Grid item xs={6}>
            <ActionButton
              variant="text"
              onClick={() => {
                if (fileInputRef.current) {
                  const fileElement = fileInputRef.current as HTMLInputElement
                  fileElement.click()
                }
              }}>
              Import{' '}
              <input type="file" hidden ref={fileInputRef} accept="application/json" onChange={handleFileChange} />
            </ActionButton>
          </Grid>
        </Grid>
        <PrintResume />
      </Box>
    </div>
  )
}

export default EditorLayout
