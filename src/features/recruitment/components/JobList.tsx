import { RecruitmentItemLoading } from '@/components/loading/RecruitmentItemLoading'
import { theme } from '@/config/theme'
import { IRecruitmentItemType } from '@/features/recruitment/api/useJobList'
import JobDetail from '@/features/recruitment/components/JobDetail'
import { JobItem } from '@/features/recruitment/components/JobItem'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

type Props = {
  data?: IRecruitmentItemType[]
  selectedField?: string
  isLoading?: boolean
}

export const JobList: FC<Props> = ({ data, selectedField, isLoading }) => {
  const router = useRouter()
  const urlParams = router.query

  const [pageId, setPageId] = useState<string | string[] | undefined>(urlParams.id)
  useEffect(() => {
    setPageId(urlParams.id)
    console.log(pageId)
  }, [urlParams])
  const isOpeningDetail = pageId ? true : false
  const noOpenPositions = data?.length === 0

  const handleCloseModal = () => {
    router.replace('/recruitment')
    setPageId(undefined)
  }

  const handleOpenDetail = (jobId: string) => {
    router.replace(`/recruitment/${jobId}`)
    setPageId(jobId)
  }

  if (isLoading) {
    return <RecruitmentItemLoading />
  }
  console.log(isOpeningDetail)
  if (noOpenPositions) {
    return (
      <Typography className="bounce-in" variant="h2" marginTop={12} textAlign="center">
        No open positions!
      </Typography>
    )
  }
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" paddingTop="80px">
      <Typography variant="h2" color={theme.palette.primary.main} fontWeight={theme.typography.fontWeightMedium}>
        {selectedField} open positions
      </Typography>
      <Grid container spacing="24px" paddingY="64px">
        {data?.map(item => (
          <JobItem key={item.id} data={item} onClick={handleOpenDetail} />
        ))}
      </Grid>
      {isOpeningDetail && <JobDetail pageId={pageId} onCloseModal={handleCloseModal} />}
    </Box>
  )
}
