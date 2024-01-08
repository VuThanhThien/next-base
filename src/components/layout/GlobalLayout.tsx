import { AppFooter } from '@/components/footer/AppFooter'
import AppHeader from '@/components/header/AppHeader'
import { AMOUNT_QUERY_POSTS } from '@/constants/blog'
import { useBlogList } from '@/features/blog/api/useBlogList'
import { CalendarWidget } from '@/features/contact-us/components/CalendarWidget'
import { useJobList } from '@/features/recruitment/api/useJobList'
import { jobFields } from '@/features/recruitment/components/JobFields'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function GlobalLayout({ children }: { children: any }) {
  const isMobile = useIsMobile()
  useBlogList(AMOUNT_QUERY_POSTS)
  useJobList(jobFields[0].slug)

  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
      {!isMobile && <CalendarWidget />}
    </>
  )
}
