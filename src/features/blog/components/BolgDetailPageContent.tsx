import { linearGradientColor, theme } from '@/config/theme'
import { SideSection } from '@/features/blog/components/SideSection'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Render } from '@9gustin/react-notion-render'
import { Box, Grid, Typography } from '@mui/material'

type Props = {
  data: any
}

export const BlogDetailPageContent = ({ data }: Props) => {
  const isMobile = useIsMobile()
  console.log(data)
  return (
    <>
      <Box component="div">
        <Box
          component="div"
          style={
            isMobile
              ? {}
              : {
                  background: linearGradientColor,
                  borderRadius: '24px 24px 148px 24px',
                  paddingBlock: '3%',
                  paddingInline: '2%',
                }
          }>
          <Typography
            variant="h1"
            textAlign="left"
            color={isMobile ? theme.palette.primary.main : theme.palette.info.main}>
            {data?.metadata.properties.Name.title[0].plain_text}
          </Typography>
          <Typography
            variant="h4"
            textAlign="left"
            marginTop="16px"
            color={isMobile ? theme.palette.primary.main : theme.palette.info.main}>
            {data?.metadata.properties.Summary.rich_text[0].plain_text}
          </Typography>
        </Box>
        <Grid container marginTop="5%" justifyContent="space-between">
          <Grid item xs={12} sm={8}>
            {data?.results && <Render blocks={data?.results} classNames />}
          </Grid>
          <Grid item xs={12} sm={3}>
            <SideSection />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
