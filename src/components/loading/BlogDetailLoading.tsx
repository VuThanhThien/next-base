import { Box } from '@mui/material'
import Skeleton from 'react-loading-skeleton'

export const BlogDetailLoading = () => {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Skeleton />
      <Skeleton count={100} />
    </Box>
  )
}
