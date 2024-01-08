import FacebookIcon from '@/assets/images/FacebookIcon.svg'
import LinkedInIcon from '@/assets/images/LinkedInIcon.svg'
import TwitterIcon from '@/assets/images/TwitterIcon.svg'
import YoutubeIcon from '@/assets/images/YoutubeIcon.svg'
import { Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled('div')({
  paddingTop: '6%',
  paddingBottom: '4%',
  zIndex: '-1',
})

export const CopyRightSection = () => {
  return (
    <Wrapper>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} textAlign="left">
          <Typography sx={{ color: '#181E54' }} fontSize="16px" fontWeight="400">
            © 2023 8seneca. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display="flex">
          <Grid container spacing="10px" sx={{ justifyContent: { sm: 'right', xs: 'left' } }}>
            <Grid item>
              <Link href="https://twitter.com/8SENECA_" target="_blank">
                <Image src={TwitterIcon} width={50} height={0} alt="" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.youtube.com/@8senecaIT" target="_blank">
                <Image src={YoutubeIcon} width={0} height={0} alt="" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.linkedin.com/company/8seneca/" target="_blank">
                <Image src={LinkedInIcon} width={0} height={0} alt="" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.facebook.com/8seneca" target="_blank">
                <Image src={FacebookIcon} width={0} height={0} alt="" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
