import { useProjectList } from '@/features/project/api/useProjectList.api'
import { ProjectEntity } from '@/types/root-types'
import { Box, Grid, Typography, styled } from '@mui/material'
import { format } from 'date-fns'
import Link from 'next/link'

const LinkStyle = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'left',
})

const mappingStatus = (status: string) => {
  switch (status) {
    case 'to_do':
      return 'Reviewing'
    case 'in_review':
      return 'Reviewed'
    case 'on_going':
      return 'On going'
    case 'payment_pending':
      return 'Payment pending'
    case 'paid':
      return 'Paid'
    default:
      return 'To do'
  }
}

export const ProjectList = () => {
  const { data, isLoading } = useProjectList()

  return (
    <>
      <Grid container spacing="24px" paddingY="64px">
        {data?.map(item => (
          <Grid width={'100%'} item key={item.id}>
            <LinkStyle
              href={{ pathname: `/project/[id]`, query: { id: item.id } }}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}>
              <ProjectItem data={item} />
            </LinkStyle>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export const ProjectItem = ({ data }: { data: ProjectEntity }) => {
  return (
    <Box
      width={'100%'}
      padding={5}
      display={'flex'}
      justifyContent={'space-between'}
      bgcolor={'#EFEFEF'}
      borderRadius={'11px'}>
      <Box textAlign={'left'}>
        <Typography fontWeight={600} fontSize={18}>
          {data.projectType}
        </Typography>
        <Typography fontWeight={400} fontSize={14} color={'#797979'}>
          {format(new Date(data.deadline), 'MMM dd, yyyy')}
        </Typography>
      </Box>
      <Box padding={'8px 16px'} bgcolor={'#D7D7D7'} borderRadius={'20px'} display={'flex'} alignItems={'center'}>
        {mappingStatus(data.status)}
      </Box>
    </Box>
  )
}
