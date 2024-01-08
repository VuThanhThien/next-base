import { theme } from '@/config/theme'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, Grid, Typography, styled } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Zoom } from 'react-awesome-reveal'

type CommentItemType = {
  icon: StaticImageData
  name: string
  href: string
  description: string
}

type Props = {
  item: CommentItemType
}
const CommentWrapper = styled('div')({
  width: '100%',
  background: '#F8F8F8',
  borderRadius: '30px',
  gap: '10px',
})

const CommentLinkStyled = styled('a')({
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '6%',
  paddingRight: '6%',
  minHeight: '200px',
})

export const CommentItem: FC<Props> = ({ item }) => {
  const isMobile = useIsMobile()
  return (
    <Grid item xs={isMobile ? 12 : 6}>
      <Zoom>
        <CommentWrapper>
          <CommentLinkStyled href={item.href} target="_blank">
            <Box display="flex" alignItems="center">
              <Box>
                <Image src={item.icon} width={0} height={item.name === 'ADVFN' ? 24 : 48} alt="" />
              </Box>
              <Typography variant="h3" fontWeight={theme.typography.fontWeightBold} marginLeft="12px">
                {item.name}
              </Typography>
            </Box>
            <Box marginTop="12px">
              <Typography variant="body1" fontWeight={theme.typography.fontWeightRegular}>
                {item.description}
              </Typography>
            </Box>
          </CommentLinkStyled>
        </CommentWrapper>
      </Zoom>
    </Grid>
  )
}
