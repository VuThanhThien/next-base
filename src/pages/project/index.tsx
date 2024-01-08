import { PageWrapper } from '@/components/PageWrapper'
import { theme } from '@/config/theme'
import { ProjectList } from '@/features/project/components/ListProject'
import { OverviewForm } from '@/features/project/components/OverviewForm'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `project-tab-${index}`,
    'aria-controls': `project-tabpanel-${index}`,
  }
}
export default function Page() {
  const [tab, setActiveTab] = React.useState(0)
  const onActiveListProjectTab = () => {
    setActiveTab(1)
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }
  return (
    <PageWrapper customStyle={{ textAlign: 'center', paddingInline: '5%' }} title={'Project'}>
      <Typography variant="h1" fontWeight="bold" color={theme.palette.primary.main}>
        Project
      </Typography>
      <Box marginTop="5%" marginX={'10%'}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="All project" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tab} index={0}>
          <OverviewForm onChangeTab={onActiveListProjectTab} />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <ProjectList />
        </CustomTabPanel>
      </Box>
    </PageWrapper>
  )
}
