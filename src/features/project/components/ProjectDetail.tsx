import { ScheduleForm } from '@/features/contact-us/components/ScheduleForm'
import { ProjectEntity } from '@/types/root-types'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

type Props = {
  data: ProjectEntity
}

export const ProjectDetailPageContent = ({ data }: Props) => {
  console.log('🚀🚀🚀 ~ file: ProjectDetail.tsx:9 ~ ProjectDetailPageContent ~ data:', data)
  switch (data.status) {
    case 'to_do':
      return <ProjectTodo />
    case 'in_review':
      return <ProjectInReview />
  }
}

const ProjectTodo = () => {
  const router = useRouter()
  return (
    <Box height={'100vh'}>
      <Button onClick={router.back}>Back</Button>
      <Typography variant="h1" textAlign={'center'} textTransform={'uppercase'}>
        Project in review...
      </Typography>
    </Box>
  )
}

const ProjectInReview = () => {
  const router = useRouter()
  return (
    <Box height={'100vh'}>
      <Button onClick={router.back}>Back</Button>
      <Typography variant="h1" textAlign={'center'} textTransform={'uppercase'}>
        Project review success
      </Typography>
      <ScheduleForm />
    </Box>
  )
}
