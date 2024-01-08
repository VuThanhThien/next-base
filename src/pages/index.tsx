import { PageWrapper } from '@/components/PageWrapper'
import { DescribeSection } from '@/features/home/components/DescribeSection'
import { VideoSection } from '@/features/home/components/video/VideoSection'

import dynamic from 'next/dynamic'

const AboutUsSection = dynamic(() =>
  import('@/features/home/components/about-us/AboutUsSection').then(module => module.AboutUsSection),
)
const ProgressSection = dynamic(() =>
  import('@/features/home/components/process/ProgressSection').then(module => module.ProgressSection),
)
const CollaborativeSection = dynamic(() =>
  import('@/features/home/components/collaborative/CollaborativeSection').then(module => module.CollaborativeSection),
)
const CommentSection = dynamic(() =>
  import('@/features/home/components/comment/CommentSection').then(module => module.CommentSection),
)
const FeaturedInSection = dynamic(() =>
  import('@/features/home/FeaturedInSection').then(module => module.FeaturedInSection),
)
const ContactUsSection = dynamic(() =>
  import('@/features/home/ContactUsSection').then(module => module.ContactUsSection),
)

export default function Page() {
  return (
    <PageWrapper customStyle={{ paddingTop: '5%' }}>
      <DescribeSection />
      <VideoSection />
      <AboutUsSection />
      <ProgressSection />
      <CollaborativeSection />
      <CommentSection />
      <FeaturedInSection />
      <ContactUsSection />
    </PageWrapper>
  )
}
