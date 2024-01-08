import { PageWrapper } from '@/components/PageWrapper'
import { SectionWrapper } from '@/components/SectionWrapper'
import { theme } from '@/config/theme'
import BuilderLayout from '@/features/resume-builder/BuilderLayout'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Typography } from '@mui/material'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  const isMobile = useIsMobile()
  return (
    <>
      {isMobile ? (
        <>
          <PageWrapper>
            <Typography variant="h1" textAlign="center">
              Sorry this section is not available on mobile phone devices, please try it with others devices
            </Typography>
          </PageWrapper>
        </>
      ) : (
        <PageWrapper>
          <Typography variant="h1" textAlign="center" fontWeight="bold" color={theme.palette.primary.main}>
            Resume Builder
          </Typography>
          <SectionWrapper>
            <BuilderLayout />
          </SectionWrapper>
        </PageWrapper>
      )}
    </>
  )
}

export default Page
